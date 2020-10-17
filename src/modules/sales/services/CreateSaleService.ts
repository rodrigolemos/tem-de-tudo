import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Sale from '@modules/sales/entities/Sale';
import Partner from '@modules/partners/entities/Partner';
import Product from '@modules/products/entities/Product';
import ICreateSaleServiceDTO from '../dtos/ICreateSaleServiceDTO';

class CreateSaleService {
  public async execute(saleData: ICreateSaleServiceDTO): Promise<Sale | null> {

    // Check if customer and seller exist
    await this.checkPartner(saleData, 'customer');
    await this.checkPartner(saleData, 'seller');

    const salesRepository = getRepository(Sale);

    // Check if an order for the product already exists
    const order = await salesRepository.find({
      where: {
        order: saleData.order,
        product_id: saleData.product_id
      }
    });

    if (order.length) {
      throw new AppError(`order already exists.`, 400);
    }

    // Check if product exists
    const product = await getRepository(Product).findOne({
      where: {
        id: saleData.product_id
      }
    });

    if (!product) {
      throw new AppError(`product does not exist.`, 400);
    }

    // Calculates the sale price
    saleData.sale_price = product.sale_price * saleData.quantity;

    const sale = salesRepository.create(saleData);

    await salesRepository.save(sale);

    return sale;

  }

  /**
   * Check if partner exists on database
   * @param saleData ICreateSaleServiceDTO
   * @param type 'customer' | 'seller'
   */
  private async checkPartner(saleData: ICreateSaleServiceDTO, type: 'customer' | 'seller'): Promise<Partner | null> {

    const id = type === 'customer' ? saleData.customer.id : saleData.seller.id;

    const partner = await getRepository(Partner).findOne({
      where: {
        id,
        type
      }
    });

    if (!partner) {
      throw new AppError(`${type} does not exist.`, 400);
    }

    return partner;

  }

}

export default CreateSaleService;