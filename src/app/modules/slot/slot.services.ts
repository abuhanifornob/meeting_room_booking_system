/* eslint-disable @typescript-eslint/no-explicit-any */

import { TSlot } from './slot.interface';
import { Sloots } from './slot.model';
import { minutesToTime, timeToMinutes } from './slot.utils';

const createSlotIntoDB = async (payload: TSlot) => {
  const slotDuration = 60;
  const startTime = payload.startTime;
  const endTime = payload.endTime;
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  const totalDurationsMinuts = endMinutes - startMinutes;
  const numbersOfSlots = Math.floor(totalDurationsMinuts / slotDuration);

  const slots = [];

  for (let i = 0; i < numbersOfSlots; i++) {
    const slotStartMinutes = startMinutes + i * slotDuration;
    const slotEndMinutes = slotStartMinutes + slotDuration;

    const slotStartTime = minutesToTime(slotStartMinutes);
    const slotEndTime = minutesToTime(slotEndMinutes);

    const newSlot: TSlot = {
      room: payload.room,
      date: payload.date,
      startTime: slotStartTime,
      endTime: slotEndTime,
      isBooked: false,
    };

    const result = await Sloots.create(newSlot);
    slots.push(result);
  }

  return slots;
};

const getAvailabilitySlotsFromDB = async (date?: string, roomId?: string) => {
  const quary: any = { isBooked: false };
  if (date) {
    quary.date = date;
  }
  if (roomId) {
    quary.room = roomId;
  }

  const result = await Sloots.find(quary).populate('room');
  return result;
};

export const SlotServices = {
  createSlotIntoDB,
  getAvailabilitySlotsFromDB,
};
