import { Router } from 'express';

const cardRouter = Router();

cardRouter.get('/', (req, res) => {
  res.send('card');
});

export default cardRouter;
