import { Router } from 'express';

import BusinessController from '../controllers/BusinessController';

const businessRouter = Router();
const businessController = new BusinessController();

businessRouter.get('/', businessController.get);

export default businessRouter;