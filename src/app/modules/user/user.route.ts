import { Router } from 'express';

import validateRequet from '../../middlewer/validateRequest';

import { userControllers } from './user.controller';
import { UserValidation } from './user.validation';

const route = Router();

route.post(
  '/signup',
  validateRequet(UserValidation.userValidationSchema),
  userControllers.createUser,
);

export const UserRouters = route;
