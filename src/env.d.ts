import z from 'zod';
import { envSchema } from './config/env';
import { AppEnvironment } from './types/common';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {
      NODE_ENV: AppEnvironment;
    }
  }
}
