import { Request, Response } from 'express';

import ListProductsService from '@modules/products/services/ListProductsService';
import CreateProductService from '@modules/products/services/CreateProductService';
import RemoveProductService from '@modules/products/services/RemoveProductService';

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

  public async remove(req: Request, res: Response) {

    const { id } = req.params;

    const removeProductService = new RemoveProductService();

    const product = await removeProductService.execute(id);
    
    return res.json(product);

  }

}
