import { Request, Response } from 'express';

export default class BusinessController {

  public async get(req: Request, res: Response) {
    return res.json({
      hello: 'world'
    });
  }

}
