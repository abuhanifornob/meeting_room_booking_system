import { Model } from 'mongoose';

import { USER_ROLE } from './user.constant';

export type TUsers = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: 'admin' | 'user';
};

// ............for static Method.
export interface UserModel extends Model<TUsers> {
  isUserExists(email: string): Promise<TUsers | null>;
}

export type TUserRole = keyof typeof USER_ROLE;
