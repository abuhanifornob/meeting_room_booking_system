import { TLogin } from './auth.interface';

const authLogin = async (payload: TLogin) => {
  console.log(payload);
};

export const LoginServices = {
  authLogin,
};
