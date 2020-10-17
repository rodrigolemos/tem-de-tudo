import { getRepository, createQueryBuilder } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Sale from '../entities/Sale';

// TO FIX: check URL type
interface Request {
  starts: any;
  finishes: any;
}

class ListPeriodService {
  public async execute({ starts, finishes }: Request): Promise<Sale[] | null> {

    const listPeriod = await getRepository(Sale)
      .createQueryBuilder('sales')
      .select('date, SUM(sale_price) as total')
      .where('date BETWEEN :starts AND :finishes ', {
        starts: starts,
        finishes: finishes,
      })
      .groupBy('date')
      .orderBy('date')
      .getRawMany();

    return listPeriod;

  }
}

export default ListPeriodService;