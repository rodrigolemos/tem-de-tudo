import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  public async list(): Promise<Product[] | null> {
    const found = await this.find();

    return found || null;
  }
}

export default ProductsRepository;