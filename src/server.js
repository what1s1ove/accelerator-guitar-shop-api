import jsonServer from 'json-server';
import { initDatabase } from './database/database.js';
import { initCustomRoutes } from './routes/routes.js';
import { Env } from './common/enums/enums.js';

const server = jsonServer.create();
const router = jsonServer.router(initDatabase());
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

initCustomRoutes(server);

server.use(router);

server.listen(Env.APP.SERVER_PORT, () => {
  console.log('JSON Server is running');
});
