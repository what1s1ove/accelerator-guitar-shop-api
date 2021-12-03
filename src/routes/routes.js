import { initCommentsRouter } from './comments/comments.route.js';
import { initCouponsRouter } from './coupons/coupons.route.js';
import { initOrdersRouter } from './orders/orders.route.js';

const initCustomRoutes = (server, repositories) => {
  const { commentsRepository } = repositories;

  initCommentsRouter(server, {
    commentsRepository,
  });
  initCouponsRouter(server);
  initOrdersRouter(server);
};

export { initCustomRoutes };
