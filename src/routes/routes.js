import { initCouponsRouter } from './coupons/coupons.js';

const routeInits = [initCouponsRouter];

const initCustomRoutes = (server) => {
  routeInits.forEach((routeInit) => routeInit(server));
};

export { initCustomRoutes };
