import Joi from 'joi';
import {
  CouponCheckPayloadKey,
  CouponType,
  CouponValidationMessage,
} from '../../common/enums/enums.js';

const couponTypes = Object.values(CouponType);

const couponCheckPayload = Joi.object({
  [CouponCheckPayloadKey.COUPON]: Joi.string()
    .valid(...couponTypes)
    .required()
    .messages({
      'any.only': CouponValidationMessage.COUPON_ONE_OF,
    }),
});

export { couponCheckPayload };
