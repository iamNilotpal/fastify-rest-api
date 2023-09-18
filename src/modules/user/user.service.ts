import { prisma } from "@/lib/database";
import { serializeZodError } from "@/lib/errors";
import { ResponseError } from "@/types/common";
import { User } from "@prisma/client";
import { randomBytes } from "crypto";
import createHttpError, { HttpError } from "http-errors";
import z, { ZodError } from "zod";
import { CreateUserResponseSchema, CreateUserSchema } from "./user.schema";

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type CreateUserIResponse = z.infer<typeof CreateUserResponseSchema>;

export const findUserByEmail = async (email: string): Promise<User | null> =>
  prisma.user.findUnique({ where: { email } });

export const findUserById = async (id: number): Promise<User | null> =>
  prisma.user.findUnique({ where: { id } });

export const findUserByEmailAndThrow = async (
  email: string
): Promise<User | null> => {
  const user = await findUserByEmail(email);
  if (!user)
    throw new createHttpError.NotFound(`User doesn't exist with ${email}.`);
  return user;
};

export const findUserByIdAndThrow = async (
  id: number
): Promise<User | null> => {
  const user = await findUserById(id);
  if (!user)
    throw new createHttpError.NotFound(`User doesn't exist with ${id}.`);
  return user;
};

export const createUser = async (
  userDto: CreateUserInput
): Promise<{
  user: CreateUserIResponse | null;
  error: ResponseError<CreateUserInput | {}>;
}> => {
  try {
    const sanitizedUserData = await CreateUserSchema.parseAsync(userDto);

    const exist = await findUserByEmail(sanitizedUserData.email);
    if (exist)
      throw new createHttpError.Conflict(
        `User already exist with email ${sanitizedUserData.email}.`
      );

    const user = await prisma.user.create({
      data: {
        ...sanitizedUserData,
        salt: randomBytes(48).toString("hex"),
      },
    });

    const parsedUser = CreateUserResponseSchema.parse(user);
    return { user: parsedUser, error: null };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = serializeZodError<CreateUserInput>(error);
      return { user: null, error: { ...errors, statusCode: 400 } };
    }

    if (error instanceof HttpError) return { user: null, error };
    return { user: null, error: createHttpError.InternalServerError() };
  }
};
