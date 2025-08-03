/* eslint-disable node/no-process-env */
import { resolve } from 'node:path';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { z } from 'zod';

expand(
  config({
    path: resolve(
      process.cwd(),
      process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
    ),
  })
);

const EnvSchema = z
  .object({
    NODE_ENV: z.string().default('development'),
    PORT: z.coerce.number().default(9999),
    LOG_LEVEL: z.enum([
      'fatal',
      'error',
      'warn',
      'info',
      'debug',
      'trace',
      'silent',
    ]),
    DATABASE_URL: z.string().url(),
    DATABASE_AUTH_TOKEN: z.string().optional(),
  })
  .superRefine((input, ctx) => {
    if (input.NODE_ENV === 'production' && !input.DATABASE_AUTH_TOKEN) {
      ctx.addIssue({
        code: 'invalid_type',
        expected: 'string',
        received: 'undefined',
        input: input.DATABASE_AUTH_TOKEN,
        path: ['DATABASE_AUTH_TOKEN'],
        message: "Must be set when NODE_ENV is 'production'",
      });
    }
  });

export type env = z.infer<typeof EnvSchema>;

// eslint-disable-next-line ts/no-redeclare
const { data: env, error } = EnvSchema.safeParse(process.env);

if (error) {
  // biome-ignore lint/suspicious/noConsole: For deploy logs
  console.error('❌ Invalid env:');
  // biome-ignore lint/suspicious/noConsole: For deploy logs
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
  process.exit(1);
}

//export default env!;

export const ENV = env;
