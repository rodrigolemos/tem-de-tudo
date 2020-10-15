import { Router } from 'express';

import businessRouter from '@modules/business/infra/http/routes/business.routes';

const routes = Router();

routes.use('/business', businessRouter);

export default routes;