import { TUsers } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUsers) => {
  // const userExists = await User.isUserExists(payload.email);
  // if (!userExists) {
  //   throw new Error('User id Not Exists');
  // }
  const result = await User.create(payload);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
