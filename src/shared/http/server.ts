import 'dotenv/config';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { AppError } from '@shared/errors/AppError';
import { routes } from './routes';

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

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

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
