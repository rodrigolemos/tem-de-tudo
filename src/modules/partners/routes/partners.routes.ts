import { Router } from 'express';

import PartnersController from '../controllers/PartnersController';

const partnersRouter = Router();
const partnersController = new PartnersController();

partnersRouter.get('/list', partnersController.list);
partnersRouter.post('/create', partnersController.create);

export default partnersRouter;