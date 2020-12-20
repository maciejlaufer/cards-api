import { Router } from 'express';
import authController from './auth.controller';

const authRouter: Router = Router();

authRouter.get('/login', authController.login);
authRouter.put('/register', authController.register);

export default authRouter;
