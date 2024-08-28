import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

import { User } from '../user/user.model';

import { TLogin } from './auth.interface';

const authLogin = async (payload: TLogin) => {
  // Check is user is Exists
  const isUserExists = await User.findOne({ email: payload.email }).select(
    '+password',
  );
  if (!isUserExists) {
    throw new Error('User is Not Exiists');
  }
  // Check Password Match

  const matchPassword = await bcrypt.compare(
    payload.password,
    isUserExists.password,
  );

  if (!matchPassword) {
    throw new Error('Password Not Match , Please provide Correct Password');
  }

  // create JWT access Token
  const jwtPayload = {
    userEmail: isUserExists.email,
    userRole: isUserExists.role,
  };
  const accessToken = jwt.sign(
    jwtPayload,

    // config.jwt_access_token_secret as string,
    'e3ff6a5ebc8248d5b867ce6813d07eb73cf6e7b03a6122aa1363681c71ef0de4e831f6ba5410f4f571048380f0c56f167d42476d6ed25bb2d9324f317bf66f07',
    { expiresIn: '60d' },
  );

  return {
    accessToken,
    isUserExists,
  };
};

export const LoginServices = {
  authLogin,
};
