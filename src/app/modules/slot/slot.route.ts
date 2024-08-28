import { Router } from 'express';

import auth from '../../middlewer/auth';
import validateRequet from '../../middlewer/validateRequest';

import { SlotsController } from './slot.controller';
import { SlotValidation } from './slot.validation';

const route = Router();

route.post(
  '/',
  auth('admin'),
  validateRequet(SlotValidation.slotValidationSchema),
  SlotsController.createSlots,
);
route.get('/availability', SlotsController.getAvailableSlots);

export const SlotRoutes = route;
