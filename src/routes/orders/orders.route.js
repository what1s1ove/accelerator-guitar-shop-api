import { orderCreatePayload as orderCreatePayloadSchema } from '../../schemas/schemas.js';
import { ApiPath, HttpCode } from '../../common/enums/enums.js';
import { validateSchema } from '../../middlewares/middlewares.js';

const initOrdersRouter = (server) => {
  server.post(
    ApiPath.ORDERS,
    validateSchema(orderCreatePayloadSchema),
    (_req, res) => {
      return res.status(HttpCode.CREATED).json(HttpCode.CREATED);
    },
  );
};

export { initOrdersRouter };
