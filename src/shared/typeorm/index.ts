import { Role } from '@roles/entities/Role';
import { DataSource } from 'typeorm';
import { CreateRolesTable1671566877269 } from './migrations/1671566877269-CreateRolesTable';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1671566877269],
});