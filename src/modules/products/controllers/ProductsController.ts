import { Request, Response } from 'express';

import ListProductService from '@modules/products/services/ListProductsService';
import CreateProductService from '@modules/products/services/CreateProductService';

export default class ProductsController {

  public async list(req: Request, res: Response) {

    const listProductService = new ListProductService();

    const productsFound = await listProductService.execute();

    return res.json(productsFound);

  }

  public async create(req: Request, res: Response) {

    const createProductService = new CreateProductService();

    const product = await createProductService.execute(req.body);
    
    return res.json(product);

  }

}
