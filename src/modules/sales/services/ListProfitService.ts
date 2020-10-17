import { getRepository } from 'typeorm';

import IReportsServiceDTO from '../dtos/IReportsServiceDTO';
import Sale from '../entities/Sale';

class ListProfitService {
  public async execute({ starts, finishes }: IReportsServiceDTO): Promise<Sale[] | null> {

    const listProfit = await getRepository(Sale)
      .createQueryBuilder('sales')
      .select('date, SUM(sale_price) - SUM(cost_price) as profit')
      .where('date BETWEEN :starts AND :finishes ', {
        starts: starts,
        finishes: finishes,
      })
      .groupBy('date')
      .orderBy('date')
      .getRawMany();

    return listProfit;

  }
}

export default ListProfitService;