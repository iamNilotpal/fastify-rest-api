import { prisma } from '@/lib/database';
import { Errors } from '@/types/common';
import { User } from '@prisma/client';
import { randomBytes } from 'crypto';
import z, { ZodError } from 'zod';
import { createUserSchema } from './user.schema';

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const createUser = async (
  userDto: CreateUserInput
): Promise<{
  user: User | null;
  errors: Errors<CreateUserInput | {}> | null;
}> => {
  try {
    const sanitizedUserData = await createUserSchema.parseAsync(userDto);
    const user = await prisma.user.create({
      data: { ...sanitizedUserData, salt: randomBytes(48).toString('hex') },
    });

    return { user, errors: null };
  } catch (error) {
    if (!(error instanceof ZodError))
      return {
        user: null,
        errors: { message: 'Something went wrong. Please try again.' },
      };

    const errors = {} as Errors<CreateUserInput>;
    error.errors.forEach((err) => {
      errors[err.path[0] as keyof CreateUserInput] = err.message;
    });

    return { user: null, errors };
  }
};
