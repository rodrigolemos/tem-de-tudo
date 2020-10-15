import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/list', productsController.get);
productsRouter.post('/add', productsController.create);

export default productsRouter;