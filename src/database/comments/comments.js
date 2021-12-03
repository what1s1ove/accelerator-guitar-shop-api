import { generateItems, getRandomNumber } from '../../helpers/helpers.js';
import { generateComment } from './helpers.js';
import { Config } from './common.js';

const generateComments = (guitars) => {
  return guitars
    .map((guitar) => {
      const commentsCount = getRandomNumber(Config.COUNT.MIN, Config.COUNT.MAX);

      return generateItems(commentsCount, () => generateComment(guitar.id));
    })
    .flat();
};

export { generateComments };
