import { NextFunction, Request, Response } from 'express';

import { RoomsServices } from './room.services';

const createRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const roomsData = req.body;
    const data = await RoomsServices.createRoomsIntoDB(roomsData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Room added successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const data = await RoomsServices.getSingleRoomFromDB(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Room retrieved successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

const getAllRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await RoomsServices.getAllRoomsFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Rooms retrieved successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};
const updateRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  const data = await RoomsServices.updateRoomsIntoDB(id, updateData);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'Rooms retrieved successfully',
    data: data,
  });
};

const deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await RoomsServices.deleteRoomsFromDB(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Room deleted successfully',
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

export const RoomsControllers = {
  createRooms,
  getSingleRoom,
  getAllRooms,
  updateRoom,
  deleteRoom,
};
