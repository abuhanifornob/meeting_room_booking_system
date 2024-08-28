import { Room } from '../room/room.model';
import { User } from '../user/user.model';

import { TBooking } from './booking.interface';
import { Booking } from './booking.model';

const createBookingIntoBD = async (payload: TBooking) => {
  const { slots, room } = payload;
  let totalAmount = 0;
  //   const totalSlots = (await Sloots.find({ _id: { $in: slots } })).length;
  const slotsLength = slots.length;
  const rooms = await Room.findById(room);

  totalAmount = (rooms?.pricePerSlot as number) * slotsLength;
  payload.totalAmount = totalAmount;
  const result = (
    await (
      await (await Booking.create(payload)).populate('room')
    ).populate('user')
  ).populate('slots');
  return result;
};

const updateBookingFormDB = async (
  bookingId: string,
  payload: Partial<TBooking>,
) => {
  const { slots, ...remainingBooking } = payload;
  const modifiedUpdateData: Record<string, unknown> = {
    ...remainingBooking,
  };

  // Handling array updates
  if (slots && Array.isArray(slots)) {
    modifiedUpdateData['slots'] = slots;
  }

  // Data Update into Database
  const result = await Booking.findByIdAndUpdate(
    bookingId,
    modifiedUpdateData,
    {
      new: true,
    },
  );
  return result;
};

const getAllBookingFromDB = async () => {
  //   const result = (
  //     await (await (await Booking.find()).populate('room')).populate('user')
  //   ).populate('slots');
  const result = await Booking.find()
    .populate('room')
    .populate('user')
    .populate('slots');
  return result;
};
const getMyBookingFromDB = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User Not Exits');
  }

  const result = await Booking.findOne({ user: user._id })
    .populate('room')
    .populate('user')
    .populate('slots');
  return result;
};

const deleteBookingFromDB = async (id: string) => {
  const result = await Booking.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  return result;
};
export const BookingServices = {
  createBookingIntoBD,
  updateBookingFormDB,
  getAllBookingFromDB,
  deleteBookingFromDB,
  getMyBookingFromDB,
};
