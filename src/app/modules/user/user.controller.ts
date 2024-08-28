import { NextFunction, Request, Response } from 'express';

import { UserServices } from './user.services';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await UserServices.createUserIntoDB(userData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User registered successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const userControllers = {
  createUser,
};
