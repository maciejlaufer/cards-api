import express, { Router } from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import cardRouter from './resources/card/card.router';
import { connect } from './utils/db';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

const rootRouter = Router();

rootRouter.use('/card', cardRouter);

app.use('/api', rootRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};
