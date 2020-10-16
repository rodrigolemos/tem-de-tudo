import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Partner from '../entities/Partner';
import ICreatePartnerServiceDTO from '../dtos/ICreatePartnerServiceDTO';

class CreatePartnerService {
  public async execute(partnerData: ICreatePartnerServiceDTO): Promise<Partner | null> {
    try {

      const partnersRepository = getRepository(Partner);

      const partner = partnersRepository.create(partnerData);

      await partnersRepository.save(partner);

      return partner;

    } catch {

      throw new AppError('Internal Server Error');

    }
  }
}

export default CreatePartnerService;