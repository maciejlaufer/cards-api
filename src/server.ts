import config from './config';
import App from './app';

const app = new App(config.port);

app.start();
