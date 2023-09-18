import { CustomOmit } from "@/types/common";
import { User } from "@prisma/client";
import z from "zod";

export const CreateUserSchema = z.object({
  email: z
    .string({ required_error: "Email is a required field." })
    .email({ message: "Email must be valid email." }),
  password: z
    .string({ required_error: "Password is a required field" })
    .min(5, "Password must be at least 5 characters long")
    .max(30, "Password should not be longer than 30 characters."),
  lastName: z.string({ required_error: "Last name is a required field" }),
  firstName: z.string({ required_error: "First name is a required field." }),
});

export const CreateUserResponseSchema = z
  .custom<CustomOmit<CustomOmit<User, "salt">, "password">>()
  .transform((user) => ({
    id: user.id,
    email: user.email,
    lastName: user.lastName,
    firstName: user.firstName,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }))
  .nullable();
