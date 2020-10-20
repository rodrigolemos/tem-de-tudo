import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Product from '../entities/Product';

class RemoveProductService {
  public async execute(id: string): Promise<Product | undefined> {
    const productsRepository = getRepository(Product);

    const productFound = await productsRepository.findOne({
      where: {
        id
      }
    });

    if (!productFound) {
      throw new AppError('Produto não encontrado.');
    }

    productFound.status = 'I';

    const productUpdated = productsRepository.create(productFound);

    await productsRepository.save(productUpdated);

    return productUpdated;
  }
}

export default RemoveProductService;