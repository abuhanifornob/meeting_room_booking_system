import jwt, { JwtPayload } from 'jsonwebtoken';

import { NextFunction, Request, Response } from 'express';

import { TUserRole } from '../modules/user/user.interface';

const auth = (role: TUserRole) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      // if the token send from the client
      if (!token) {
        throw new Error('You are Not Authorized');
      }

      // check is token varified
      // invalid token
      jwt.verify(
        token,
        'e3ff6a5ebc8248d5b867ce6813d07eb73cf6e7b03a6122aa1363681c71ef0de4e831f6ba5410f4f571048380f0c56f167d42476d6ed25bb2d9324f317bf66f07',
        function (err, decoded) {
          if (err) {
            throw new Error('You provide Wron Token');
          }
          const tokenRole = (decoded as JwtPayload).userRole;
          console.log('token Role', tokenRole, 'Actual Role', role);
          if (!(tokenRole === role)) {
            return res.json({
              success: false,
              statusCode: 401,
              message: 'You have no access to this route',
            });
          }
          req.user = decoded as JwtPayload;
          next();
        },
      );
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
