import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/list', productsController.list);
productsRouter.post('/create', productsController.create);

export default productsRouter;