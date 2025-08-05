import { drizzle } from 'drizzle-orm/libsql';
import { ENV } from '@/env';

// biome-ignore lint/performance/noNamespaceImport: This is cleaner than exlicitly importing each one
import * as schema from './schema';

const db = drizzle({
  connection: {
    url: ENV.DATABASE_URL,
    authToken: ENV.DATABASE_AUTH_TOKEN,
  },
  casing: 'snake_case',
  schema,
});

export default db;
