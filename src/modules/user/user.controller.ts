import { FastifyReply, FastifyRequest } from "fastify";
import { createUser } from "./user.service";

export const registerUserHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { user, error } = await createUser(request.body as any);
  const code = error?.statusCode;
  return reply.code(code || 201).send({ user, error });
};
