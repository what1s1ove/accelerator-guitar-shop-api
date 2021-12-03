import { CouponType } from '../../common/enums/enums.js';

const couponTypeToDiscount = {
  [CouponType.LIGHT]: 15,
  [CouponType.MEDIUM]: 25,
  [CouponType.HEIGHT]: 35,
};

export { couponTypeToDiscount };
