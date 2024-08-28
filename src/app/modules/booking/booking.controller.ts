/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

import { BookingServices } from './booking.services';

const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookingData = req.body;
    const data = await BookingServices.createBookingIntoBD(bookingData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Booking created successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};
const updateBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const bookingData = req.body;
    const data = await BookingServices.updateBookingFormDB(id, bookingData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Booking updated successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};
const getAllBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await BookingServices.getAllBookingFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'All bookings retrieved successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};
const getMyBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { userEmail } = req.user;
    console.log(userEmail);
    const data = await BookingServices.getMyBookingFromDB(userEmail);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User bookings retrieved successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};
const deleteBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const data = await BookingServices.deleteBookingFromDB(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Booking deleted successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

export const BookingController = {
  createBooking,
  updateBooking,
  getAllBooking,
  deleteBooking,
  getMyBooking,
};
