import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Product from '../entities/Product';
import ICreateProductServiceDTO from '../dtos/ICreateProductServiceDTO';

class CreateProductService {
  public async execute(productData: ICreateProductServiceDTO): Promise<Product | null> {
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