import { z } from 'zod';

const roomValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    }),
    roomNo: z.number({
      required_error: 'Room Number is required',
      invalid_type_error: 'Room Number must be a number',
    }),
    floorNo: z.number({
      required_error: 'floorNo is required',
      invalid_type_error: 'floorNo must be a number',
    }),
    capacity: z.number({
      required_error: 'capacity is required',
      invalid_type_error: 'capacity must be a number',
    }),
    pricePerSlot: z.number({
      required_error: 'pricePerSlot is required',
      invalid_type_error: 'pricePerSlot must be a number',
    }),
    amenities: z.array(z.string()),

    isDeleted: z.boolean().optional().default(false),
  }),
});
const updateRoomValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
      })
      .optional(),
    roomNo: z
      .number({
        required_error: 'Room Number is required',
        invalid_type_error: 'Room Number must be a number',
      })
      .optional(),
    floorNo: z
      .number({
        required_error: 'floorNo is required',
        invalid_type_error: 'floorNo must be a number',
      })
      .optional(),
    capacity: z
      .number({
        required_error: 'capacity is required',
        invalid_type_error: 'capacity must be a number',
      })
      .optional(),
    pricePerSlot: z
      .number({
        required_error: 'pricePerSlot is required',
        invalid_type_error: 'pricePerSlot must be a number',
      })
      .optional(),
    amenities: z.array(z.string()).optional(),

    isDeleted: z.boolean().optional().default(false),
  }),
});

export const RoomValidation = {
  updateRoomValidationSchema,
  roomValidationSchema,
};
