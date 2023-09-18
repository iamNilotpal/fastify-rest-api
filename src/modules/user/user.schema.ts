import z from "zod";

const BaseUserSchema = z.object({
  email: z
    .string({ required_error: "Email is a required field." })
    .email({ message: "Email must be valid email." }),
  lastName: z.string({ required_error: "Last name is a required field" }),
  firstName: z.string({ required_error: "First name is a required field." }),
});

export const CreateUserSchema = BaseUserSchema.merge(
  z.object({
    password: z
      .string({ required_error: "Password is a required field" })
      .min(5, "Password must be at least 5 characters long")
      .max(30, "Password should not be longer than 30 characters."),
  })
);

export const CreateUserResponseSchema = BaseUserSchema.merge(
  z.object({
    id: z.number(),
    updatedAt: z.date(),
    createdAt: z.date(),
  })
);
