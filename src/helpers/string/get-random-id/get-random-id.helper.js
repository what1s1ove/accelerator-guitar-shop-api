import { randomUUID } from 'node:crypto';

const getRandomId = () => {
  return randomUUID();
};

export { getRandomId };
