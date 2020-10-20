import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Sale from '@modules/sales/entities/Sale';
import Partner from '@modules/partners/entities/Partner';
import Product from '@modules/products/entities/Product';
import ICreateSaleServiceDTO from '../dtos/ICreateSaleServiceDTO';

class CreateSaleService {
  public async execute(saleData: ICreateSaleServiceDTO[]): Promise<Sale[] | null> {

    const salesRepository = getRepository(Sale);
    const productsRepository = getRepository(Product);

    const preparedSale = [];
    const updatedProducts = [];

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
        throw new AppError(`Este número de pedido já foi associado ao produto.`, 400);
      }

      // Check if product exists
      const product = await productsRepository.findOne({
        where: {
          id: itemSale.product_id
        }
      });

      if (!product) {
        throw new AppError(`Produto não encontrado.`, 400);
      }

      // Check and remove from product from stock
      const finalQuantity = product.stock_quantity - itemSale.quantity;

      if (finalQuantity < 0) {

        throw new AppError(`Quantidade em estoque insuficiente.`, 400);

      } else {

        product.stock_quantity = finalQuantity;

        updatedProducts.push(productsRepository.create(product));

      }

      // Sets the cost and sale price in order to calculate profit
      itemSale.sale_price = product.sale_price * itemSale.quantity;
      itemSale.cost_price = product.cost_price * itemSale.quantity;

      preparedSale.push(salesRepository.create(itemSale));
      
    }

    await productsRepository.save(updatedProducts);
    await salesRepository.save(preparedSale);

    return preparedSale;

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
      throw new AppError(`Cliente ou vendedor não encontrado(s).`, 400);
    }

    return partner;

  }

}

export default CreateSaleService;