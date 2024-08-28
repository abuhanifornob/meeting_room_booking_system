import express from 'express';

import auth from '../../middlewer/auth';
import validateRequet from '../../middlewer/validateRequest';

import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validation';
const route = express.Router();

route.post(
  '/',
  auth('user'),
  validateRequet(BookingValidation.bookingValidationSchema),
  BookingController.createBooking,
);

route.get('/', auth('user'), BookingController.getMyBooking);
route.put(
  '/:id',
  validateRequet(BookingValidation.updateBookingValidationSchema),
  BookingController.updateBooking,
);
route.delete('/:id', BookingController.deleteBooking);
route.get('/', auth('admin'), BookingController.getAllBooking);

export const BookingRoutes = route;
