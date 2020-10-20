import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Partner from '../entities/Partner';

class ListPartnersService {
  public async execute(): Promise<Partner[] | null> {
    const partnersRepository = getRepository(Partner);

    const partners = await partnersRepository.find({
      where: {
        status: 'A'
      }
    });

    return partners;
  }
}

export default ListPartnersService;