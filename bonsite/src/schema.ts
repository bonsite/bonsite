import { integer, pgTable, text, bigint } from 'drizzle-orm/pg-core';

// Bonsai table definition
export const bonsaiTable = pgTable('bonsai', {
    id: bigint('id', { mode: 'number' }).primaryKey(),
    name: text('name').notNull(),
    amount: integer('amount').notNull(),
  });
  
  // Orders table definition
  export const ordersTable = pgTable('orders', {
    id: bigint('id', { mode: 'number' }).primaryKey(),
    bonsaiId: bigint('bonsai_id', { mode: 'number' })
      .notNull()
      .references(() => bonsaiTable.id, { onDelete: 'cascade' }),
    amount: bigint('amount', { mode: 'number' }).notNull(),
  });

export type InsertBonsai = typeof bonsaiTable.$inferInsert;
export type SelectBonsai = typeof bonsaiTable.$inferSelect;

export type InsertOrder = typeof ordersTable.$inferInsert;
export type SelectOrder = typeof ordersTable.$inferSelect;