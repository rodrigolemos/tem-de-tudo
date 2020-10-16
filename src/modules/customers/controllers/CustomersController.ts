import { Request, Response } from 'express';

export default class CustomersController {

  public async list(req: Request, res: Response) {
    res.json({
      hello: 'list'
    })
  }

  public async create(req: Request, res: Response) {
    res.json({
      hello: 'create'
    })
  }

}