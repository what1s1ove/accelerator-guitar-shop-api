import { couponCheckPayload as couponCheckPayloadSchema } from '../../schemas/schemas.js';
import { ApiPath, HttpCode } from '../../common/enums/enums.js';
import { validateSchema } from '../../middlewares/middlewares.js';
import { couponTypeToDiscount } from './common.js';

const initCouponsRouter = (server) => {
  server.post(
    ApiPath.COUPONS,
    validateSchema(couponCheckPayloadSchema),
    (req, res) => {
      const { coupon } = req.body;

      const discount = couponTypeToDiscount[coupon];

      return res.status(HttpCode.OK).json(discount);
    },
  );
};

export { initCouponsRouter };
