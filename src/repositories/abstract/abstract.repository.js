import { getRandomId } from '../../helpers/helpers.js';

class Abstract {
  constructor(entities) {
    this._entities = entities;
  }

  get entities() {
    return this._entities;
  }

  create(payload) {
    const newEntity = {
      id: getRandomId(),
      ...payload,
    };

    this._entities.push(newEntity);

    return newEntity;
  }
}

export { Abstract };
