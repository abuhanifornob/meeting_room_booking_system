/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

import { SlotServices } from './slot.services';

const createSlots = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const slotData = req.body;
    const data = await SlotServices.createSlotIntoDB(slotData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Slots created successfully',
      data: data,
    });
  } catch (err: any) {
    next(err);
  }
};

const getAvailableSlots = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { date, roomId } = req.query;

    const data = await SlotServices.getAvailabilitySlotsFromDB(
      date as string,
      roomId as string,
    );
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Available slots retrieved successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

export const SlotsController = {
  createSlots,
  getAvailableSlots,
};
