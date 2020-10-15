import { getCustomRepository } from 'typeorm';

import Product from '../entities/Product';
import ProductsRepository from '../repositories/ProductsRepository';

interface Request {
  id: string;
  name: string;
  description: string;
  brand: string;
  provider: string;
  classification: string;
  cost_price: number;
  sale_price: number;
  stock_quantity: number;
  store_quantity: number;
}

class CreateProductService {
  public async execute(productData: Request): Promise<Product | null> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = productsRepository.create(productData);

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;