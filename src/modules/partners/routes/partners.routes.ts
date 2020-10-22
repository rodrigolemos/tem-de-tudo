import { Router } from 'express';

import PartnersController from '../controllers/PartnersController';

const partnersRouter = Router();
const partnersController = new PartnersController();

partnersRouter.get('/list', partnersController.list);
partnersRouter.post('/create', partnersController.create);
partnersRouter.put('/remove/:id', partnersController.remove);

export default partnersRouter;