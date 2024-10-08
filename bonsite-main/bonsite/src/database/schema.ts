import {decimal, serial, text, pgSchema, integer} from 'drizzle-orm/pg-core';

export const Schema = pgSchema("schema");

export const categorias = Schema.enum('categorias', ['Indefinida', 'Frutíferas', 'Floríferas', 'Perenes', 'Caducifólias']);

export const bonsaisTable = Schema.table('bonsais_table', {
    id: serial('id').primaryKey(),
    nome: text('nome').notNull(),
    descricao: text('descricao'),
    preco: decimal('preco', {precision: 6, scale: 2}).notNull(),
    categoria: categorias('categoria').default('Indefinida').notNull(),
    sol: integer('sol'),
    agua: integer('agua'),
    tamanho: integer('tamanho'),
    poda: integer('poda'),
    solo: integer('solo'),
    delicadeza: integer('delicadeza')
});


export type InsertBonsai = typeof bonsaisTable.$inferInsert;
export type SelectBonsai = typeof bonsaisTable.$inferSelect;