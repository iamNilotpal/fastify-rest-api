import { AppEnvironment } from '@/types/common';
import z from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string(),
  APP_PORT: z.string().default('3001'),
  NODE_ENV: z.custom<AppEnvironment>(),
  APP_HOST: z.string().default('localhost'),
});

export const envVariables = envSchema.parse(process.env);
