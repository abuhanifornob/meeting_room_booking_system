import { Router } from 'express';

import auth from '../../middlewer/auth';
import validateRequet from '../../middlewer/validateRequest';

import { RoomsControllers } from './room.controller';
import { RoomValidation } from './room.validation';

const route = Router();

route.post(
  '/',
  auth('admin'),
  validateRequet(RoomValidation.roomValidationSchema),
  RoomsControllers.createRooms,
);
route.get('/', RoomsControllers.getAllRooms);
route.get('/:id', RoomsControllers.getSingleRoom);
route.put(
  '/:id',
  auth('admin'),
  validateRequet(RoomValidation.updateRoomValidationSchema),
  RoomsControllers.updateRoom,
);
route.delete('/:id', auth('admin'), RoomsControllers.deleteRoom);

export const RoomsRoutes = route;
