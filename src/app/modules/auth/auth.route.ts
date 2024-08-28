import { Router } from 'express';

import validateRequet from '../../middlewer/validateRequest';

import { LoginControllers } from './auth.controllers';
import { AuthValidation } from './auth.validation';

const route = Router();
route.post(
  '/login',
  validateRequet(AuthValidation.authValidationSchema),
  LoginControllers.login,
);

export const AuthRoutes = route;
