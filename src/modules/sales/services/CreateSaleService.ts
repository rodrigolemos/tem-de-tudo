import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Sale from '@modules/sales/entities/Sale';
import Partner from '@modules/partners/entities/Partner';
import ICreateSaleServiceDTO from '../dtos/ICreateSaleServiceDTO';

class CreateSaleService {
  public async execute(saleData: ICreateSaleServiceDTO): Promise<Sale | null> {

    await this.checkPartner(saleData, 'customer');

    await this.checkPartner(saleData, 'seller');

    const salesRepository = getRepository(Sale);

    const sale = salesRepository.create(saleData);

    await salesRepository.save(sale);

    return sale;

  }

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