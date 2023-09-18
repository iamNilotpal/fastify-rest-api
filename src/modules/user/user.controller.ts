import { FastifyReply, FastifyRequest } from 'fastify';
import { createUser } from './user.service';

export const registerUserHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { user, errors } = await createUser(request.body as any);
  return reply.code(errors ? 400 : 201).send({ user, errors });
};
