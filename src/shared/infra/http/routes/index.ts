import { Router } from 'express';

import productsRouter from '@modules/products/routes/products.routes';
import partnersRouter from '@modules/partners/routes/partners.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/partners', partnersRouter);

export default routes;