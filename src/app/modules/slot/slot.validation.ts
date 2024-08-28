import { z } from 'zod';

const slotValidationSchema = z.object({
  body: z.object({
    room: z.string({
      required_error: 'Room is required',
      invalid_type_error: 'Room must be a string',
    }),
    date: z.string({
      required_error: 'Date is required',
      invalid_type_error: 'Date must be a string',
    }),
    startTime: z.string({
      required_error: 'Start Time is required',
      invalid_type_error: 'Start Time must be a string',
    }),
    endTime: z.string({
      required_error: 'End Time is required',
      invalid_type_error: 'End Time must be a string',
    }),
    isBooked: z.boolean().optional().default(false),
  }),
});
const updateSlotValidationSchema = z.object({
  body: z.object({
    room: z
      .string({
        required_error: 'Room is required',
        invalid_type_error: 'Room must be a string',
      })
      .optional(),
    date: z
      .string({
        required_error: 'Date is required',
        invalid_type_error: 'Date must be a string',
      })
      .optional(),
    startTime: z
      .string({
        required_error: 'Start Time is required',
        invalid_type_error: 'Start Time must be a string',
      })
      .optional(),
    endTime: z
      .string({
        required_error: 'End Time is required',
        invalid_type_error: 'End Time must be a string',
      })
      .optional(),
    isBooked: z.boolean().optional().default(false),
  }),
});

export const SlotValidation = {
  slotValidationSchema,
  updateSlotValidationSchema,
};
