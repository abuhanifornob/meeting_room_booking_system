import { Types } from 'mongoose';

import { TSlot } from '../slot/slot.interface';

export interface TBooking {
  room: Types.ObjectId;
  slots: TSlot[];
  user: Types.ObjectId;
  date: string;
  isConfirmed: string;
  totalAmount: number;
  isDeleted: boolean;
}
