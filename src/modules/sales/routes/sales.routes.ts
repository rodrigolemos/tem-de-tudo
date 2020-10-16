import { Router } from 'express';

import SalesController from '../controllers/SalesController';

const salesRouter = Router();
const salesController = new SalesController();

salesRouter.get('/list', salesController.list);
// salesRouter.post('/create', salesController.create);

export default salesRouter;