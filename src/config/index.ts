import { merge } from 'lodash';
const env = process.env.NODE_ENV || 'development';

type JwtConfig = {
  secret: string;
  exp: string;
};

type Env = 'development' | 'production' | 'test';

type BaseConfig = {
  env: Env;
  isDev: boolean;
  isTest: boolean;
  port: number;
  jwt: Partial<JwtConfig>;
  dbUrl: string;
};

export type Config = Partial<BaseConfig>;

const baseConfig: Config = {
  env: env as Env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: Number(process.env.PORT) || 8080,
  jwt: {
    secret: process.env.JWT_SECRET,
    exp: '100d'
  },
  dbUrl: process.env.DB_URL
};

let envConfig: Partial<BaseConfig> = {};

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').config;
    break;
  case 'test':
  case 'testing':
    envConfig = require('./testing').config;
    break;
  default:
    envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);
