/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenerecErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenerecErrorResponse => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const errorMessages: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID',
    errorMessages,
  };
};

export default handleDuplicateError;
