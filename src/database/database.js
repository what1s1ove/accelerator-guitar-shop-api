import { readFileSync } from '../helpers/helpers.js';
import { generateComments } from './comments/comments.js';
import {
  Comments as CommentsRepository,
  Guitars as GuitarsRepository,
} from '../repositories/repositories.js';

const guitars = JSON.parse(
  readFileSync(new URL('./guitars/guitars.json', import.meta.url)),
);
const comments = generateComments(guitars);

const initDatabase = () => {
  const guitarsRepository = new GuitarsRepository(guitars);
  const commentsRepository = new CommentsRepository(comments);

  return {
    commentsRepository,
    guitarsRepository,
  };
};

export { initDatabase };
