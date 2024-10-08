import { NextFunction, Request, Response } from 'express';

import { LoginServices } from './auth.services';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loginData = req.body;
    const data = await LoginServices.authLogin(loginData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      token: data.accessToken,
      data: data.isUserExists,
    });
  } catch (err) {
    next(err);
  }
};

export const LoginControllers = {
  login,
};
