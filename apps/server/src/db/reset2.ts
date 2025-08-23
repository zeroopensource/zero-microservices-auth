import { drizzle } from 'drizzle-orm/node-postgres';
import { reset } from 'drizzle-seed';
// biome-ignore lint/performance/noNamespaceImport: Documented Usage
import * as schema from './schema';

async function main() {
  const db = drizzle(process.env.DATABASE_URL || '');
  await reset(db, schema);
}

main();
