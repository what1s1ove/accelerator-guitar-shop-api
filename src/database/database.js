const guitars = require('./guitars/guitars.json');

const initDatabase = () => ({
  guitars,
});

module.exports = {
  initDatabase,
};
