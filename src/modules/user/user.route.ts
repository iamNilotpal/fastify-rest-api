import type { FastifyInstance } from "fastify";
import { registerUserHandler } from "./user.controller";

const userRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/", registerUserHandler);
};

export default userRoutes;
