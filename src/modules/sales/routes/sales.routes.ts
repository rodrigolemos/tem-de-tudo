import { Router } from 'express';

import SalesController from '../controllers/SalesController';

const salesRouter = Router();
const salesController = new SalesController();

salesRouter.get('/list', salesController.list);
salesRouter.post('/create', salesController.create);

// Reports
salesRouter.get('/period', salesController.listPeriod);
salesRouter.get('/profit', salesController.listProfit);
salesRouter.get('/top-sellers', salesController.listTopSellers);
salesRouter.get('/top-customers', salesController.listTopCustomers);

export default salesRouter;