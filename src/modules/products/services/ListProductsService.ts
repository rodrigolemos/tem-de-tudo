import { getCustomRepository } from 'typeorm';

import Product from '../entities/Product';
import ProductsRepository from '../repositories/ProductsRepository';

class ListProductsService {
  public async execute(): Promise<Product[] | null> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const productsFound = await productsRepository.list();

    return productsFound;
  }
}

export default ListProductsService;