import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import AppError from '@shared/errors/AppError';
import routes from './routes';

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3000, () => {
  console.log(`App listening on por 3000`);
});
