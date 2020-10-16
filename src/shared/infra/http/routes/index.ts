import { Router } from 'express';

import productsRouter from '@modules/products/routes/products.routes';
import customersRouter from '@modules/customers/routes/customers.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/customers', customersRouter);

export default routes;