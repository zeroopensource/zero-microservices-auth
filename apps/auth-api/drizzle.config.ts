import { defineConfig } from 'drizzle-kit';
import { ENV } from '@/env';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  dialect: 'sqlite',
  //driver: 'turso',
  dbCredentials: {
    url: ENV.DATABASE_URL,
    //authToken: ENV.DATABASE_AUTH_TOKEN,
  },
});
