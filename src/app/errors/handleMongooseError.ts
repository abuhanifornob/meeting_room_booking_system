import mongoose from 'mongoose';

import { TErrorSources, TGenerecErrorResponse } from '../interface/error';

const handleMongooseError = (
  err: mongoose.Error.ValidationError,
): TGenerecErrorResponse => {
  const errorMessages: TErrorSources = Object.values(err?.errors).map((val) => {
    return {
      path: val?.path,
      message: val?.message,
    };
  });
  return {
    statusCode: 400,
    message: 'Mongoose Validation Error',
    errorMessages,
  };
};

export default handleMongooseError;
