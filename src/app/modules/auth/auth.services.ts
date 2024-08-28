import bcrypt from 'bcrypt';

import { User } from '../user/user.model';

import { TLogin } from './auth.interface';

const authLogin = async (payload: TLogin) => {
  // Check is user is Exists
  const isUserExists = await User.findOne({ email: payload.email });
  if (!isUserExists) {
    throw new Error('User is Not Exiists');
  }
  // Check Password Match

  const matchPassword = await bcrypt.compare(
    payload.password,
    isUserExists.password,
  );
  console.log(matchPassword);
  return {};
};

export const LoginServices = {
  authLogin,
};
