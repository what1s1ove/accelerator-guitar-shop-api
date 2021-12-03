import { readFileSync } from '../helpers/helpers.js';

const initDatabase = () => ({
  guitars: JSON.parse(
    readFileSync(new URL('./guitars/guitars.json', import.meta.url)),
  ),
});

export { initDatabase };
