import { model, Schema } from 'mongoose';

import bcrypt from 'bcrypt';

import config from '../../config';

import { TUsers, UserModel } from './user.interface';

const userSchema = new Schema<TUsers, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      max: [20, 'maximum password Character is 20'],
      min: [4, 'Password is minimum 4 Chareter type'],
    },
    phone: {
      type: String,
      max: [11, 'maximum password Character is 11'],
      min: [11, 'Password is minimum 11 Chareter type'],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: {
        values: ['admin', 'user'],
        message: '{VALUE} is not supported',
      },
    },
  },
  {
    timestamps: true,
  },
);

// middlewear or Hooks

// // Pre Hooks
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

//  Post Hooks

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

// .... Static Method.....
userSchema.statics.isUserExists = async function (email: string) {
  const existsUser = await User.findOne({ email });
  return existsUser;
};
export const User = model<TUsers, UserModel>('User', userSchema);
