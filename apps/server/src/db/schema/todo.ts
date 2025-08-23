import { boolean, serial, text } from 'drizzle-orm/pg-core';
import { pgTable } from './pgtable';

export const todo = pgTable('todo', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  completed: boolean('completed').default(false).notNull(),
});

export const todo2 = pgTable('todo2', {
  id: serial('id').primaryKey(),
  text: text('text').notNull(),
  completed: boolean('completed').default(false).notNull(),
});

export const todoSchema = { todo, todo2 };
