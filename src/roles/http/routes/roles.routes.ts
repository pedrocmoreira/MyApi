import { Router } from 'express';
import { randomUUID } from 'node:crypto';

const rolesRouter = Router();

const roles = [];

rolesRouter.post('/', (request, response) => {
  const { name } = request.body;
  const role = {
    id: randomUUID(),
    name,
    created_at: new Date(),
  };

  roles.push(role);

  return response.status(201).json(role);
});

export { rolesRouter };
