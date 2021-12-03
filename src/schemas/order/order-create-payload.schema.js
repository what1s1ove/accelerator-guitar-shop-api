import Joi from 'joi';
import {
  OrderCreatePayload,
  OrderValidationMessage,
  CouponType,
} from '../../common/enums/enums.js';

const couponTypes = Object.values(CouponType);

const orderCreatePayload = Joi.object({
  [OrderCreatePayload.GUITARS_IDS]: Joi.array()
    .items(Joi.number().positive().required())
    .required(),
  [OrderCreatePayload.COUPON]: Joi.string()
    .valid(...couponTypes)
    .required()
    .messages({
      'any.only': OrderValidationMessage.COUPON_ONE_OF,
    }),
});

export { orderCreatePayload };
