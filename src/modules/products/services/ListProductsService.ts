import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Product from '../entities/Product';

class ListProductsService {
  public async execute(): Promise<Product[] | null> {
    const productsRepository = getRepository(Product);

    const productsFound = await productsRepository.find({
      where: {
        status: 'A'
      }
    });

    return productsFound;
  }
}

export default ListProductsService;