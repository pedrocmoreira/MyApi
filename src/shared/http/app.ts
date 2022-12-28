import express, { Request, Response } from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../swagger.json';

import { AppError } from '@shared/errors/AppError';
import { routes } from './routes';

import uploadConfig from '@config/upload';
import '@shared/container';

const app = express();
app.use(cors());

app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use(errors());

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  console.log(error);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export { app };
