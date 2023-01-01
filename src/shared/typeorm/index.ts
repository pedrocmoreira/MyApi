import { Role } from '@roles/entities/Role';
import { User } from '@users/entities/User';
import { DataSource } from 'typeorm';
import { CreateRolesTable1671566877269 } from './migrations/1671566877269-CreateRolesTable';
import { CreateUsersTable1672160209574 } from './migrations/1672160209574-CreateUsersTable';
import { AddRoleIdToUsersTable1672160736069 } from './migrations/1672160736069-AddRoleIdToUsersTable';
import { CreateRefreshTokensTable1672605682627 } from './migrations/1672605682627-CreateRefreshTokensTable';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1671566877269,
    CreateUsersTable1672160209574,
    AddRoleIdToUsersTable1672160736069,
    CreateRefreshTokensTable1672605682627,
  ],
});
