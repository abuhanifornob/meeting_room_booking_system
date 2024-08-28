import { z } from 'zod';

const bookingValidationSchema = z.object({
  body: z.object({
    room: z.string({
      required_error: 'Room is required',
    }),
    slots: z.array(z.string()),
    user: z.string({
      required_error: 'user is required',
    }),
    date: z.string({
      required_error: 'date is required',
      invalid_type_error: 'date must be a string',
    }),
    totalAmount: z.number().optional(),
    isBooked: z.boolean().optional().default(false),
    isConfirmed: z.string().optional().default('unconfirmed'),
  }),
});
const updateBookingValidationSchema = z.object({
  body: z.object({
    room: z.string({
      required_error: 'Room is required',
    }),
    slots: z.array(z.string()),
    user: z.string({
      required_error: 'user is required',
    }),
    date: z.string({
      required_error: 'date is required',
      invalid_type_error: 'date must be a string',
    }),
    totalAmount: z.number().optional(),
    isBooked: z.boolean().optional().default(false),
    isConfirmed: z.string().optional().default('unconfirmed'),
  }),
});

export const BookingValidation = {
  bookingValidationSchema,
  updateBookingValidationSchema,
};
