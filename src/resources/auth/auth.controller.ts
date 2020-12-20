import { Request, Response } from 'express';
import userModel from '../user/user.model';

async function register(req: Request, res: Response): Promise<void> {
  await userModel.create({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  res.send('register');
}

async function login(req: Request, res: Response): Promise<void> {
  res.send('login');
}

const authController = {
  register,
  login
};

export default authController;
