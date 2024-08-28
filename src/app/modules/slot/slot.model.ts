import { model, Schema } from 'mongoose';

import { Room } from '../room/room.model';

import { TSlot } from './slot.interface';

const slotSchema = new Schema<TSlot>({
  room: {
    type: Schema.Types.ObjectId,

    required: [true, 'room is Required'],
    ref: Room,
  },
  date: {
    type: String,
    required: [true, 'Date is Required'],
  },
  startTime: {
    type: String,
    required: [true, 'startTime is Required'],
  },
  endTime: {
    type: String,
    required: [true, 'endTime is Required'],
  },

  isBooked: {
    type: Boolean,
    default: false,
  },
});

export const Sloots = model<TSlot>('Slots', slotSchema);
