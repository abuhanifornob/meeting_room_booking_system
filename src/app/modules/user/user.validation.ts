import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string({
        invalid_type_error: 'Password must be a string',
      })
      .max(20, { message: "Password cann't more then 20 Character" }),
    phone: z.string({
      required_error: 'Phone Number is required',
      invalid_type_error: 'Phone Number must be a string',
    }),
    role: z.enum(['admin', 'user']),

    isDeleted: z.boolean().optional().default(false),
  }),
});

const updateUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string',
      })
      .optional(),
    email: z.string().email({ message: 'Invalid email address' }).optional(),
    password: z
      .string({
        invalid_type_error: 'Password must be a string',
      })
      .max(20, { message: "Password cann't more then 20 Character" })
      .optional(),
    phone: z
      .string({
        required_error: 'Phone Number is required',
        invalid_type_error: 'Phone Number must be a string',
      })
      .optional(),
    role: z.enum(['admin', 'user']).optional(),

    isDeleted: z.boolean().optional().default(false).optional(),
  }),
});
export const UserValidation = {
  userValidationSchema,
  updateUserValidationSchema,
};
