import { model, Schema } from 'mongoose';

import { TRooms } from './room.interface';

const roomSchema = new Schema<TRooms>({
  name: {
    type: String,
    required: [true, 'Name is Required'],
  },
  roomNo: {
    type: Number,
    required: [true, 'Room Number is Required'],
  },
  floorNo: {
    type: Number,
    required: [true, 'Floor No is Required'],
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is Required'],
  },
  pricePerSlot: {
    type: Number,
    required: [true, 'Price Per Slot is Required'],
  },
  amenities: {
    type: [String],
    required: [true, 'Amenities is Required'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Room = model<TRooms>('Rooms', roomSchema);
