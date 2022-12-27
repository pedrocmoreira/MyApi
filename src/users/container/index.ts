import { IUsersRepository } from '@users/repositories/IUsersRepository';
import { UsersRepository } from '@users/repositories/UsersRepository';
import { CreateUserController } from '@users/useCases/createUser/CreateUserController';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UserRepository',
  UsersRepository
);

container.registerSingleton('CreateUserController', CreateUserController);
