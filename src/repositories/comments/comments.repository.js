import { Abstract } from '../abstract/abstract.repository.js';

class Comments extends Abstract {
  create(payload) {
    return super.create({
      ...payload,
      createAt: new Date().toISOString(),
    });
  }
}

export { Comments };
