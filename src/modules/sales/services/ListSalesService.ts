import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Sale from '../entities/Sale';

class ListSalesService {
  public async execute(): Promise<Sale[] | null> {
    const salesRepository = getRepository(Sale);

    const salesFound = await salesRepository.find();

    return salesFound;
  }
}

export default ListSalesService;