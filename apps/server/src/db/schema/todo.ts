import { boolean, serial, text } from 'drizzle-orm/pg-core';
import { pgTable } from './pgtable';

export const todo = pgTable('todo', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  completed: boolean('completed').default(false).notNull(),
});
