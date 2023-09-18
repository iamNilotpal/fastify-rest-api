import dotenv from 'dotenv';
import Fastify from 'fastify';

dotenv.config();

import { envVariables } from './config/env';
import userRoutes from './modules/user/user.route';

export const fastify = Fastify({ logger: true });

async function startServer() {
  try {
    fastify.register(userRoutes, { prefix: '/api/users' });

    await fastify.listen({
      host: envVariables.APP_HOST,
      port: Number(envVariables.APP_PORT),
    });
  } catch (error) {
    await fastify.close();
    process.exit(1);
  }
}

startServer();
