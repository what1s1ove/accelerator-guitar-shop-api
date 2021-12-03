import { readFileSync } from '../helpers/helpers.js';
import { generateComments } from './comments/comments.js';

const guitars = JSON.parse(
  readFileSync(new URL('./guitars/guitars.json', import.meta.url)),
);
const comments = generateComments(guitars);

const initDatabase = () => ({
  guitars,
  comments,
});

export { initDatabase };
