import config from './config';
import App from './app';
import AuthController from './resources/auth/auth.controller';

const app = new App([new AuthController()], Number(config.port));

app.start();
