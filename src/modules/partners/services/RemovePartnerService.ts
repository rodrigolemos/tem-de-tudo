import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Partner from '../entities/Partner';

class RemovePartnerService {
  public async execute(id: string): Promise<Partner | undefined> {
    const partnersRepository = getRepository(Partner);

    const partnerFound = await partnersRepository.findOne({
      where: {
        id
      }
    });

    if (!partnerFound) {
      throw new AppError('Parceiro não encontrado', 404);
    }

    partnerFound.status = 'I';

    const partnerUpdated = partnersRepository.create(partnerFound);

    await partnersRepository.save(partnerUpdated);

    return partnerUpdated;
  }
}

export default RemovePartnerService;