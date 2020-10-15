import { Request, Response } from 'express';

export default class ProductsController {

  public async get(req: Request, res: Response) {
    return res.json({
      hello: 'world'
    });
  }

}
