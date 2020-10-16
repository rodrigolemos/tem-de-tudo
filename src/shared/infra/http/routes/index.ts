import { Router } from 'express';

import productsRouter from '@modules/products/routes/products.routes';
import partnersRouter from '@modules/partners/routes/partners.routes';
import salesRouter from '@modules/sales/routes/sales.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/partners', partnersRouter);
routes.use('/sales', salesRouter);

export default routes;