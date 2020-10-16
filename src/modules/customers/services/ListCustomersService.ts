import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Customer from '../entities/Customer';

class ListCustomersService {
  public async execute(): Promise<Customer[] | null> {
    try {
      const customersRepository = getRepository(Customer);

      const customersFound = await customersRepository.find();

      return customersFound;

    } catch {

      throw new AppError('Internal Server Error');

    }
  }
}

export default ListCustomersService;