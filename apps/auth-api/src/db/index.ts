import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

import { ENV } from '@/env';

// biome-ignore lint/performance/noNamespaceImport: This is cleaner than exlicitly importing each one
import * as schema from './schema';

const client = createClient({
  url: ENV.DATABASE_URL,
  authToken: ENV.DATABASE_AUTH_TOKEN,
});

const db = drizzle(client, {
  schema,
});

export default db;
