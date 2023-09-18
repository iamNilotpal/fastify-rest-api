import { FastifyReply, FastifyRequest } from "fastify";
import { CreateUserInput, createUser } from "./user.service";

export const registerUserHandler = async (
  request: FastifyRequest<{ Body: CreateUserInput }>,
  reply: FastifyReply
) => {
  const { user, error } = await createUser(request.body);
  const code = error?.statusCode;
  return reply.code(code || 201).send({ user, error });
};
