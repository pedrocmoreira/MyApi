import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { container } from 'tsyringe';
import { CreateUserController } from '@users/useCases/createUser/CreateUserController';
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController';

const usersRouter = Router();
const createUserController = container.resolve(CreateUserController);
const listUserController = container.resolve(ListUsersController);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      roleId: Joi.string().uuid().required(),
    },
  }),
  (request, response) => {
    return createUserController.handle(request, response);
  }
);

usersRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {},
  }),
  (request, response) => {
    return listUserController.handle(request, response);
  }
);

export { usersRouter };
