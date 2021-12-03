import {
  getRandomNumber,
  getRandomId,
  getRandomItem,
} from '../../helpers/helpers.js';
import { Config } from './common.js';

const getCommentDate = () => {
  const date = new Date();

  date.setMonth(
    date.getMonth() -
      getRandomNumber(Config.DATE_RANGE.MONTH.MIN, Config.DATE_RANGE.MONTH.MAX),
  );
  date.setDate(
    date.getDate() -
      getRandomNumber(Config.DATE_RANGE.DAY.MIN, Config.DATE_RANGE.DAY.MAX),
  );

  return date.toISOString();
};

const generateComment = (guitarId) => ({
  id: getRandomId(),
  userName: getRandomItem(Config.USER_NAME),
  advantages: getRandomItem(Config.ADVANTAGES),
  disadvantages: getRandomItem(Config.DISADVANTAGES),
  comment: getRandomItem(Config.COMMENTS),
  rating: getRandomNumber(Config.RATING_COUNT.MIN, Config.RATING_COUNT.MAX),
  createAt: getCommentDate(),
  guitarId,
});

export { generateComment };
