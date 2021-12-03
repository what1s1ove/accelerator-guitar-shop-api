import { commentCreatePayload as commentCreatePayloadSchema } from '../../schemas/schemas.js';
import { ApiPath, HttpCode } from '../../common/enums/enums.js';
import { validateSchema } from '../../middlewares/middlewares.js';

const initCommentsRouter = (server, repositories) => {
  const { commentsRepository } = repositories;

  server.post(
    ApiPath.COMMENTS,
    validateSchema(commentCreatePayloadSchema),
    (req, res) => {
      const newComment = commentsRepository.create(req.body);

      return res.status(HttpCode.CREATED).json(newComment);
    },
  );
};

export { initCommentsRouter };
