import { pgTableCreator } from 'drizzle-orm/pg-core';

const tableNamespace = 'zero-auth-v1';
export const pgTable = pgTableCreator((name) => `${tableNamespace}_${name}`);
