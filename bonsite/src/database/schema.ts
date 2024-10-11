import { decimal, serial, text, pgSchema, integer, uuid, boolean } from 'drizzle-orm/pg-core';

export const Schema = pgSchema("schema");

// Enum for the bonsais categories
export const categorias = Schema.enum('categorias', ['Indefinida', 'Frutíferas', 'Floríferas', 'Perenes', 'Caducifólias']);

// Bonsais table
export const bonsaisTable = Schema.table('bonsais', {
    id: uuid('id').primaryKey(),
    nome: text('nome').notNull(),
    descricao: text('descricao'),
    preco: decimal('preco', { precision: 6, scale: 2 }).notNull(),
    categoria: categorias('categoria').default('Indefinida').notNull(),
    sol: integer('sol'),
    sol_desc: integer('sol_desc'),  // Optional description field for 'sol'
    agua: integer('agua'),
    agua_desc: integer('agua_desc'), // Optional description field for 'agua'
    tamanho: integer('tamanho'),
    tamanho_desc: integer('tamanho_desc'),  // Optional description field for 'tamanho'
    poda: integer('poda'),
    poda_desc: integer('poda_desc'),  // Optional description field for 'poda'
    solo: integer('solo'),
    solo_desc: integer('solo_desc'),  // Optional description field for 'solo'
    delicadeza: integer('delicadeza'),
    delicadeza_desc: integer('delicadeza_desc'),  // Optional description field for 'delicadeza'
    ativo: boolean('ativo').notNull().default(true)  // New boolean field as per the diagram
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
    bonsai_id: integer('bonsai_id').notNull(),  // Foreign key to bonsais
    cliente_id: integer('clientes_id').notNull(),  // Foreign key to clientes
    concluido: boolean('concluido').notNull().default(false)  // Boolean for completed status
});

export type InsertBonsai = typeof bonsaisTable.$inferInsert;
export type SelectBonsai = typeof bonsaisTable.$inferSelect;

export type InsertCliente = typeof clientesTable.$inferInsert;
export type SelectCliente = typeof clientesTable.$inferSelect;

export type InsertPedido = typeof pedidosTable.$inferInsert;
export type SelectPedido = typeof pedidosTable.$inferSelect;
