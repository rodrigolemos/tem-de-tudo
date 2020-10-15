import { getCustomRepository } from 'typeorm';

import Product from '../infra/typeorm/entities/Product';
import ProductsRepository from '../infra/typeorm/repositories/ProductsRepository';

class ListProductsService {
  public async execute(): Promise<Product[] | null> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const productsFound = await productsRepository.list();

    return productsFound;
  }
}

export default ListProductsService;