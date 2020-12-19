import { Router, Request, Response } from 'express';

class AuthController {
  public path: string = '/auth';
  public router: Router = Router();

  constructor() {
    this.intializeRoutes();
  }

  private intializeRoutes() {
    this.router.get(`${this.path}/register`, this.register);
    this.router.get(`${this.path}/login`, this.login);
  }

  private register(req: Request, res: Response) {
    return res.send('register');
  }

  private login(req: Request, res: Response) {
    return res.send('login');
  }
}

export default AuthController;
