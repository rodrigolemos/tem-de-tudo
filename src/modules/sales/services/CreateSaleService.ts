import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Sale from '@modules/sales/entities/Sale';
import Partner from '@modules/partners/entities/Partner';
import Product from '@modules/products/entities/Product';
import ICreateSaleServiceDTO from '../dtos/ICreateSaleServiceDTO';

class CreateSaleService {
  public async execute(saleData: ICreateSaleServiceDTO[]): Promise<Sale[] | {}> {

    const salesRepository = getRepository(Sale);
    const productsRepository = getRepository(Product);

    for (const itemSale of saleData) {

      // Check if customer and seller exist
      await this.checkPartner(itemSale, 'customer');
      await this.checkPartner(itemSale, 'seller');

      // Check if an order for the product already exists
      const order = await salesRepository.find({
        where: {
          order: itemSale.order,
          product_id: itemSale.product_id
        }
      });

      if (order.length) {
        throw new AppError(`this order is already associated to this product.`, 400);
      }

      // Check if product exists
      const product = await productsRepository.findOne({
        where: {
          id: itemSale.product_id
        }
      });

      if (!product) {
        throw new AppError(`product does not exist.`, 400);
      }

      // Sets the cost and sale price in order to calculate profit
      itemSale.sale_price = product.sale_price * itemSale.quantity;
      itemSale.cost_price = product.cost_price * itemSale.quantity;

      // Check stock
      // Remove from stock

      const sale = salesRepository.create(itemSale);

      await salesRepository.save(sale);
      
    }

    return {
      message: 'Venda inserida com sucesso!'
    };

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