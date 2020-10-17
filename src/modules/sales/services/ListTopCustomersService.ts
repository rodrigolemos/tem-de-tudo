import { getRepository } from 'typeorm';

import IReportsServiceDTO from '../dtos/IReportsServiceDTO';
import Sale from '../entities/Sale';

class ListTopCustomersService {
  public async execute({ starts, finishes }: IReportsServiceDTO): Promise<Sale[] | null> {

    const listTopSellers = await getRepository(Sale)
      .createQueryBuilder('s')
      .addFrom('partners', 'p')
      .select('p.name, SUM(s.sale_price) as total')
      .where("s.customer_id = p.id AND s.date BETWEEN :starts AND :finishes ", {
        starts: starts,
        finishes: finishes,
      })
      .groupBy('p.name')
      .orderBy('total', 'DESC')
      .getRawMany();

    return listTopSellers;

  }
}

export default ListTopCustomersService;