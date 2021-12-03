import Joi from 'joi';
import { CommentCreatePayloadKey } from '../../common/enums/enums.js';

const commentCreatePayload = Joi.object({
  [CommentCreatePayloadKey.USER_NAME]: Joi.string().required(),
  [CommentCreatePayloadKey.ADVANTAGE]: Joi.string().required(),
  [CommentCreatePayloadKey.DISADVANTAGE]: Joi.string().required(),
  [CommentCreatePayloadKey.COMMENT]: Joi.string().required(),
  [CommentCreatePayloadKey.RATING]: Joi.number().positive().required(),
  [CommentCreatePayloadKey.GUITAR_ID]: Joi.number().positive().required(),
});

export { commentCreatePayload };
