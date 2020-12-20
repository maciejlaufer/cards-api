import { NextFunction, Request, Response } from 'express';

async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {}

async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {}

const userController = { getUserById, createUser };

export default userController;
