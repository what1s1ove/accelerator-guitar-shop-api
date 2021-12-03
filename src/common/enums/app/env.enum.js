import { config } from 'dotenv';

config();

const { PORT } = process.env;

const Env = {
  APP: {
    SERVER_PORT: PORT,
  },
};

export { Env };
