import mongoose from 'mongoose';

import { TErrorSources, TGenerecErrorResponse } from '../interface/error';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenerecErrorResponse => {
  const errorMessages: TErrorSources = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];
  return {
    statusCode: 400,
    message: 'Invalid Id',
    errorMessages,
  };
};

export default handleCastError;
