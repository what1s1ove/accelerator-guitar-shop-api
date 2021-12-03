import jsonServer from 'json-server';
import { initDatabase } from './database/database.js';
import { initCustomRoutes } from './routes/routes.js';
import { Env } from './common/enums/enums.js';

const { guitarsRepository, commentsRepository } = initDatabase();

const server = jsonServer.create();
const router = jsonServer.router({
  guitars: guitarsRepository.entities,
  comments: commentsRepository.entities,
});
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

initCustomRoutes(server, {
  guitarsRepository,
  commentsRepository,
});

server.use(router);

server.listen(Env.APP.SERVER_PORT, () => {
  console.log('JSON Server is running');
});
