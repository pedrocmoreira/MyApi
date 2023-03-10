import 'dotenv/config';
import 'reflect-metadata';
import { app } from './app';
import { AppDataSource } from '../typeorm/index';

AppDataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
});
