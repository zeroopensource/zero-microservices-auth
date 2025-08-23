import { pgTableCreator } from 'drizzle-orm/pg-core';

const dbNamespace = 'zero-auth-v1';
export const pgTable = pgTableCreator((name) => `${dbNamespace}_${name}`);
