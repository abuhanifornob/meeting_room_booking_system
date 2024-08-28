import { Model } from 'mongoose';

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
