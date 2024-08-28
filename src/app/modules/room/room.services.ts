import { TRooms } from './room.interface';
import { Room } from './room.model';

const createRoomsIntoDB = async (payload: TRooms) => {
  const result = await Room.create(payload);
  return result;
};

const getSingleRoomFromDB = async (id: string) => {
  const result = await Room.findById(id);
  return result;
};

const getAllRoomsFromDB = async () => {
  const result = await Room.find();
  return result;
};

const updateRoomsIntoDB = async (roomId: string, payload: Partial<TRooms>) => {
  const { amenities, ...remainingRoomData } = payload;
  const modifiedUpdateData: Record<string, unknown> = {
    ...remainingRoomData,
  };
  // Handling array updates
  if (amenities && Array.isArray(amenities)) {
    modifiedUpdateData['amenities'] = amenities;
  }
  // Data Update into Database
  const result = await Room.findByIdAndUpdate(roomId, modifiedUpdateData, {
    new: true,
  });
  return result;
};

const deleteRoomsFromDB = async (roomId: string) => {
  const result = await Room.findByIdAndUpdate(
    roomId,
    {
      isDeleted: true,
    },
    {
      new: true,
    },
  );
  return result;
};
export const RoomsServices = {
  createRoomsIntoDB,
  getSingleRoomFromDB,
  updateRoomsIntoDB,
  getAllRoomsFromDB,
  deleteRoomsFromDB,
};
