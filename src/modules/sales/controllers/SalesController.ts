import { Request, Response } from 'express';

import ListSalesService from '@modules/sales/services/ListSalesService';
// import CreateSaleService from '@modules/sales/services/CreateSaleService';

export default class SalesController {

  public async list(req: Request, res: Response) {

    const listSalesService = new ListSalesService();

    const salesFound = await listSalesService.execute();

    return res.json(salesFound);

  }

  // public async create(req: Request, res: Response) {

  //   const createSaleService = new CreateSaleService();

  //   const sale = await createSaleService.execute(req.body);
    
  //   return res.json(sale);

  // }

}
