import { Request, Response } from 'express';

import ListPartnersService from '@modules/partners/services/ListPartnersService';
import CreatePartnerService from '@modules/partners/services/CreatePartnerService';
import RemovePartnerService from '@modules/partners/services/RemovePartnerService';

export default class PartnersController {

  public async list(req: Request, res: Response) {

    const listPartnersService = new ListPartnersService();

    const partnersFound = await listPartnersService.execute();

    return res.json(partnersFound);

  }

  public async create(req: Request, res: Response) {

    const createPartnerService = new CreatePartnerService();

    const partner = await createPartnerService.execute(req.body);
    
    return res.json(partner);

  }

  public async remove(req: Request, res: Response) {

    const { id } = req.params;

    const removePartnerService = new RemovePartnerService();

    const product = await removePartnerService.execute(id);
    
    return res.json(product);

  }

}