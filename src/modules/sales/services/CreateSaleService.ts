import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Sale from '@modules/sales/entities/Sale';
import Partner from '@modules/partners/entities/Partner';
import ICreateSaleServiceDTO from '../dtos/ICreateSaleServiceDTO';

class CreateSaleService {
  public async execute(saleData: ICreateSaleServiceDTO): Promise<Sale | null> {

    const customer = await getRepository(Partner).findOne({
      where: {
        id: saleData.customer.id,
        type: 'customer'
      }
    });

    if (!customer) {
      throw new AppError('Customer does not exist.', 400);
    }

    const seller = await getRepository(Partner).findOne({
      where: {
        id: saleData.seller.id,
        type: 'seller'
      }
    });

    if (!seller) {
      throw new AppError('Seller does not exist.', 400);
    }

    const salesRepository = getRepository(Sale);

    const sale = salesRepository.create(saleData);

    await salesRepository.save(sale);

    return sale;

  }
}

export default CreateSaleService;