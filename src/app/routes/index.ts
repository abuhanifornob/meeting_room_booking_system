import { Router } from 'express';

import { AuthRoutes } from '../modules/auth/auth.route';
import { BookingRoutes } from '../modules/booking/booking.route';
import { RoomsRoutes } from '../modules/room/room.route';
import { SlotRoutes } from '../modules/slot/slot.route';
import { UserRouters } from '../modules/user/user.route';

const router = Router();

const moduleRoute = [
  {
    path: '/auth',
    route: UserRouters,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/rooms',
    route: RoomsRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  {
    path: '/my-bookings',
    route: BookingRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
