import z from 'zod';

export const createUserSchema = z.object({
  email: z.string({ required_error: 'Email is a required field.' }),
  password: z.string({ required_error: 'Password is a required field' }),
  lastName: z.string({ required_error: 'Last name is a required field' }),
  firstName: z.string({ required_error: 'First name is a required field.' }),
});
