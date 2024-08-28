import { NextFunction, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';

const notFounApi = (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    statusCode: 404,
    message: 'Not Found',
  });
  next();
};

export default notFounApi;
