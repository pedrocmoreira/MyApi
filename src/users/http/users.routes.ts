import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { container } from 'tsyringe';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { CreateUserController } from '@users/useCases/createUser/CreateUserController';
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController';
import { CreateLoginController } from '@users/useCases/createLogin/CreateLoginController';
import { isAuthenticated } from '@shared/http/middlewares/isAuthenticated';
import { UpdateAvatarController } from '@users/useCases/updateAvatar/UpdateAvatarController';
import { ShowProfileController } from '@users/useCases/showProfile/ShowProfileController';

const usersRouter = Router();
const upload = multer(uploadConfig);

const createUserController = container.resolve(CreateUserController);
const listUserController = container.resolve(ListUsersController);
const createLoginController = container.resolve(CreateLoginController);
const updateAvatarController = container.resolve(UpdateAvatarController);
const showProfileController = container.resolve(ShowProfileController);

usersRouter.post(
  '/',
  isAuthenticated,
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
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {},
  }),
  (request, response) => {
    return listUserController.handle(request, response);
  }
);

usersRouter.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  (request, response) => {
    return createLoginController.handle(request, response);
  }
);

usersRouter.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatar'),
  (request, response) => {
    return updateAvatarController.handle(request, response);
  }
);

usersRouter.get('/profile', isAuthenticated, (request, response) => {
  return showProfileController.handle(request, response);
});

export { usersRouter };
