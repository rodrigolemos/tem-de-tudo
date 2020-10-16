import { Request, Response } from 'express';

import ListCustomersService from '@modules/customers/services/ListCustomersService';
import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

export default class CustomersController {

  public async list(req: Request, res: Response) {

    const listCustomersService = new ListCustomersService();

    const customersFound = await listCustomersService.execute();

    return res.json(customersFound);

  }

  public async create(req: Request, res: Response) {

    const createCustomerService = new CreateCustomerService();

    const customer = await createCustomerService.execute(req.body);
    
    return res.json(customer);

  }

}