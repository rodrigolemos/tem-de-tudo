import { Request, Response } from 'express';

import ListProductsService from '@modules/products/services/ListProductsService';
import CreateProductService from '@modules/products/services/CreateProductService';

export default class ProductsController {

  public async list(req: Request, res: Response) {

    const listProductsService = new ListProductsService();

    const productsFound = await listProductsService.execute();

    return res.json(productsFound);

  }

  public async create(req: Request, res: Response) {

    const createProductService = new CreateProductService();

    const product = await createProductService.execute(req.body);
    
    return res.json(product);

  }

}
