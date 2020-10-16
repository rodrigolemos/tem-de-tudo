import { Router } from 'express';

import CustomersController from '../controllers/CustomersController';

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.get('/list', customersController.list);
customersRouter.post('/create', customersController.create);

export default customersRouter;