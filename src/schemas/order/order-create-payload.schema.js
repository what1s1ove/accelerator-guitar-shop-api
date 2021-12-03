import Joi from 'joi';
import {
  OrderCreatePayloadKey,
  OrderValidationMessage,
  CouponType,
} from '../../common/enums/enums.js';

const couponTypes = Object.values(CouponType);

const orderCreatePayload = Joi.object({
  [OrderCreatePayloadKey.GUITARS_IDS]: Joi.array()
    .items(Joi.number().positive().required())
    .required(),
  [OrderCreatePayloadKey.COUPON]: Joi.string()
    .valid(...couponTypes)
    .required()
    .messages({
      'any.only': OrderValidationMessage.COUPON_ONE_OF,
    }),
});

export { orderCreatePayload };
