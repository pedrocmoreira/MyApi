import { RolesRepository } from '@roles/repositories/RolesRepository';
import { CreateRoleController } from './createRole/CreateRoleController';
import { CreateRoleUseCase } from './createRole/CreateRoleUseCase';

const rolesRepository = new RolesRepository();

const createRoleUseCase = new CreateRoleUseCase(rolesRepository);

export const createRolesController = new CreateRoleController(
  createRoleUseCase
);
