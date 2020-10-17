import { Request, Response } from 'express';

import ListSalesService from '@modules/sales/services/ListSalesService';
import CreateSaleService from '@modules/sales/services/CreateSaleService';

// Reports
import ListPeriodService from '@modules/sales/services/ListPeriodService';
import ListProfitService from '@modules/sales/services/ListProfitService';
import ListTopSellersService from '@modules/sales/services/ListTopSellersService';

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

  public async listProfit(req: Request, res: Response) {

    const { starts, finishes } = req.query;

    const listProfitService = new ListProfitService();

    const profitInPeriod = await listProfitService.execute({
      starts,
      finishes
    });

    return res.json(profitInPeriod);

  }

  public async listTopSellers(req: Request, res: Response) {

    const { starts, finishes } = req.query;

    const listTopSellersService = new ListTopSellersService();

    const profitInPeriod = await listTopSellersService.execute({
      starts,
      finishes
    });

    return res.json(profitInPeriod);

  }

}
