import { Router } from 'express';

import validateRequet from '../../middlewer/validateRequest';

import { RoomsControllers } from './room.controller';
import { RoomValidation } from './room.validation';

const route = Router();

route.post(
  '/',
  validateRequet(RoomValidation.roomValidationSchema),
  RoomsControllers.createRooms,
);
route.get('/', RoomsControllers.getAllRooms);
route.get('/:id', RoomsControllers.getSingleRoom);
route.put(
  '/:id',
  validateRequet(RoomValidation.updateRoomValidationSchema),
  RoomsControllers.updateRoom,
);
route.delete('/:id', RoomsControllers.deleteRoom);

export const RoomsRoutes = route;
