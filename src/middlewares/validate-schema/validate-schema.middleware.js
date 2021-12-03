import { HttpCode } from '../../common/enums/enums.js';

const validateSchema = (schema) => async (req, res, next) => {
  const { body } = req;

  try {
    await schema.validateAsync(body, {
      abortEarly: false,
      convert: false,
    });
  } catch (err) {
    const { details } = err;

    return res.status(HttpCode.BAD_REQUEST).send({
      messages: details.map((err) => err.message),
    });
  }

  return next();
};

export { validateSchema };
