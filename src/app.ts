import express, { Application, Router } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import config from './config';
import authRouter from './resources/auth/auth.router';
import userRouter from './resources/user/user.router';

class App {
  public app: Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeRouter();
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private initializeRouter() {
    const rootRouter: Router = Router();
    rootRouter.use('/auth', authRouter);
    rootRouter.use('/user', userRouter);

    this.app.use('/api', rootRouter);
  }

  private connectToTheDatabase() {
    mongoose.connect(config.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
