import { v4 as uuidv4 } from 'uuid';
import { AppDataSource } from '@shared/typeorm';
import { hash } from 'bcryptjs';

async function create() {
  //CreateRole
  const connection = await AppDataSource.initialize();
  const roleId = uuidv4();
  await connection.query(`
    INSERT INTO roles(id, name)
    values('${roleId}', 'T.I.')
  `);
  //CreateUser
  const userId = uuidv4();
  const password = await hash('1234', 10);
  await connection.query(`
    INSERT INTO users(id, name, email, password, "isAdmin", roleId) 
    values('${userId}', 'admin', 'admin@email.com', '${password}', true, '${roleId}')
  `);
  await connection.destroy();
}

create().then(() => console.log('User admin created!'));
