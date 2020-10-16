import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Product from '../entities/Product';
import ProductsRepository from '../repositories/ProductsRepository';

class ListProductsService {
  public async execute(): Promise<Product[] | null> {
    try {
      const productsRepository = getCustomRepository(ProductsRepository);

      const productsFound = await productsRepository.list();

      return productsFound;

    } catch {

      throw new AppError('Internal Server Error');

    }
  }
}

export default ListProductsService;