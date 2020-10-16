import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Product from '../entities/Product';

interface Request {
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
    try {

      const productsRepository = getRepository(Product);

      const product = productsRepository.create(productData);

      await productsRepository.save(product);

      return product;

    } catch {

      throw new AppError('Internal Server Error');

    }
  }
}

export default CreateProductService;