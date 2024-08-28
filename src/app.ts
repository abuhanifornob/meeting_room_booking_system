import express, { Application, Request, Response } from 'express';

import cors from 'cors';

import router from './app/routes';
import { iGlobalErrorHandler } from './app/middlewer/globalErrorHandler';
import notFounApi from './app/middlewer/notFound';

export const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(iGlobalErrorHandler);
app.use(notFounApi);
