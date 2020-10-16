import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Customer from '../entities/Customer';
import ICreateCustomerServiceDTO from '../dtos/ICreateCustomerServiceDTO';

class CreateCustomerService {
  public async execute(customerData: ICreateCustomerServiceDTO): Promise<Customer | null> {
    try {

      const customersRepository = getRepository(Customer);

      const customer = customersRepository.create(customerData);

      await customersRepository.save(customer);

      return customer;

    } catch {

      throw new AppError('Internal Server Error');

    }
  }
}

export default CreateCustomerService;