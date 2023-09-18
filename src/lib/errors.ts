import { Errors } from "@/types/common";
import { ZodError } from "zod";

export const serializeZodError = <TError extends unknown>(
  error: ZodError
): Errors<TError> => {
  const errors = {} as Errors<TError>;

  error.errors.forEach((err) => {
    errors[err.path[0] as keyof TError] = err.message;
  });

  return errors;
};
