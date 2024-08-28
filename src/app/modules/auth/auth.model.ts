import { model, Schema } from 'mongoose';

import { TLogin } from './auth.interface';

const loginSchema = new Schema<TLogin>({
  email: {
    type: String,
    required: [true, 'Email is Required'],
  },
  password: {
    type: String,
    required: [true, 'password is Required'],
  },
});

// export const Sloots = model<TSlot>('Slots', slotSchema);

export const Login = model<TLogin>('Login', loginSchema);
