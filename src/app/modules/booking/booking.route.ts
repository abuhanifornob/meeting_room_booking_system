import express from 'express';

import validateRequet from '../../middlewer/validateRequest';

import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validation';
const route = express.Router();

route.post(
  '/',
  validateRequet(BookingValidation.bookingValidationSchema),
  BookingController.createBooking,
);
route.get('/', BookingController.getAllBooking);
route.put(
  '/:id',
  validateRequet(BookingValidation.updateBookingValidationSchema),
  BookingController.updateBooking,
);
route.delete('/:id', BookingController.deleteBooking);

export const BookingRoutes = route;
