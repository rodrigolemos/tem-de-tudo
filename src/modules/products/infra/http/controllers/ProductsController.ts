import { Request, Response } from 'express';

import ListProductService from '@modules/products/services/ListProductsService';

export default class ProductsController {

  public async get(req: Request, res: Response) {
    
    const listProductService = new ListProductService();

    const productsFound = await listProductService.execute();

    return res.json(productsFound);
  }

  public async create(req: Request, res: Response) {
    return res.json({
      hello: 'create'
    });
  }

}
