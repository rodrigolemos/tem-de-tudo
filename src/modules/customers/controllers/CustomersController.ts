import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

export default class CustomersController {

  public async list(req: Request, res: Response) {
    res.json({
      hello: 'list'
    })
  }

  public async create(req: Request, res: Response) {

    const createCustomerService = new CreateCustomerService();

    const customer = await createCustomerService.execute(req.body);
    
    return res.json(customer);

  }

}