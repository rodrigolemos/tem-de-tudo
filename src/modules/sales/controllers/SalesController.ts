import { Request, Response } from 'express';

import ListSalesService from '@modules/sales/services/ListSalesService';
import CreateSaleService from '@modules/sales/services/CreateSaleService';

// Reports
import ListPeriodService from '@modules/sales/services/ListPeriodService';

export default class SalesController {

  public async create(req: Request, res: Response) {

    const createSaleService = new CreateSaleService();

    const sale = await createSaleService.execute(req.body);
    
    return res.json(sale);

  }

  public async list(req: Request, res: Response) {

    const listSalesService = new ListSalesService();

    const salesFound = await listSalesService.execute();

    return res.json(salesFound);

  }

  public async listPeriod(req: Request, res: Response) {

    const { starts, finishes } = req.query;

    const listPeriodService = new ListPeriodService();

    const salesInPeriod = await listPeriodService.execute({
      starts,
      finishes
    });

    return res.json(salesInPeriod);

  }

}
