import { initCouponsRouter } from './coupons/coupons.route.js';
import { initOrdersRouter } from './orders/orders.route.js';

const routeInits = [initCouponsRouter, initOrdersRouter];

const initCustomRoutes = (server) => {
  routeInits.forEach((routeInit) => routeInit(server));
};

export { initCustomRoutes };
