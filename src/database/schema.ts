import { decimal, text, pgSchema, integer, uuid, boolean } from 'drizzle-orm/pg-core';

export const Schema = pgSchema("schema");

// Enum for the bonsais categories
export const categorias = Schema.enum('categorias', ['Indefinida', 'Frutíferas', 'Floríferas', 'Perenes', 'Caducifólias']);

// Bonsais table
export const bonsaisTable = Schema.table('bonsais', {
    id: uuid('id').primaryKey(),
    nome: text('nome').notNull(),
    url: text('url').notNull(),
    descricao: text('descricao'),
    preco: decimal('preco', { precision: 9, scale: 2 }).notNull(),  // 'double' type in the diagram is handled by decimal in Drizzle ORM
    categoria: categorias('categoria').default('Indefinida').notNull(),
    sol: integer('sol').notNull(),
    sol_desc: text('sol_desc'),  // Updated to text as per the diagram
    agua: integer('agua').notNull(),
    agua_desc: text('agua_desc'),  // Updated to text as per the diagram
    tamanho: integer('tamanho').notNull(),
    tamanho_desc: text('tamanho_desc'),  // Updated to text as per the diagram
    poda: integer('poda').notNull(),
    poda_desc: text('poda_desc'),  // Updated to text as per the diagram
    solo: integer('solo').notNull(),
    solo_desc: text('solo_desc'),  // Updated to text as per the diagram
    delicadeza: integer('delicadeza').notNull(),
    delicadeza_desc: text('delicadeza_desc'),  // Updated to text as per the diagram
    visivel: boolean('visivel').notNull().default(true)  // Renamed 'ativo' to 'visible' as per the diagram
});

// Clientes table
export const clientesTable = Schema.table('clientes', {
    id: uuid('id').primaryKey(),
    nome: text('nome').notNull(),
    telefone: text('telefone').notNull(),
    email: text('email'),  // Nullable field
    cep: text('cep')  // Nullable field
});

// Pedidos table
export const pedidosTable = Schema.table('pedidos', {
    id: uuid('id').primaryKey(),
    bonsai_id: uuid('bonsai_id').references(() => bonsaisTable.id).notNull(),  // Foreign key referencing bonsais table
    cliente_id: uuid('cliente_id').references(() => clientesTable.id).notNull(),  // Foreign key referencing clientes table
    concluido: boolean('concluido').notNull().default(false)  // Boolean for completed status
});

// TypeScript types for inserts and selects
export type InsertBonsai = typeof bonsaisTable.$inferInsert;
export type SelectBonsai = typeof bonsaisTable.$inferSelect;

export type InsertCliente = typeof clientesTable.$inferInsert;
export type SelectCliente = typeof clientesTable.$inferSelect;

export type InsertPedido = typeof pedidosTable.$inferInsert;
export type SelectPedido = typeof pedidosTable.$inferSelect;