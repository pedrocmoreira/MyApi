import { Role } from '@roles/entities/Role';
import { DataSource } from 'typeorm';
import { CreateRolesTable1671566877269 } from './migrations/1671566877269-CreateRolesTable';
import { CreateUsersTable1672160209574 } from './migrations/1672160209574-CreateUsersTable';
import { AddRoleIdToUsersTable1672160736069 } from './migrations/1672160736069-AddRoleIdToUsersTable';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [
    CreateRolesTable1671566877269,
    CreateUsersTable1672160209574,
    AddRoleIdToUsersTable1672160736069,
  ],
});
