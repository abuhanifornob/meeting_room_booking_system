import { model, Schema } from 'mongoose';

import { Room } from '../room/room.model';
import { Sloots } from '../slot/slot.model';
import { User } from '../user/user.model';

import { TBooking } from './booking.interface';

const bookingSchema = new Schema<TBooking>(
  {
    room: {
      type: Schema.Types.ObjectId,
      required: [true, 'room is Required'],
      ref: Room,
    },
    slots: [{ type: Schema.Types.ObjectId, ref: Sloots, required: true }],
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User  is Required'],
      ref: User,
    },

    date: {
      type: String,
      required: [true, 'Date is Required'],
    },
    isConfirmed: {
      type: String,
      default: 'unconfirmed',
    },
    totalAmount: { type: Number },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Booking = model<TBooking>('Booking', bookingSchema);
