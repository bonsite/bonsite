import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from '../database/db';
import { SelectBonsai, bonsaiTable, ordersTable } from '../schema';


// -------------- //
// bonsai related //
// -------------- //


// get bonsai by its id
export async function getBonsaiById(id: SelectBonsai['id']): Promise<
  Array<{
    id: number;
    name: string;
    amount: number;
  }>
> {
  return db.select().from(bonsaiTable).where(eq(bonsaiTable.id, id));
}

// get all bonsai
export async function getAllBonsai(): Promise<
  Array<{
    id: number;
    name: string;
    amount: number;
  }>
> {
  return db.select().from(bonsaiTable).orderBy(bonsaiTable.id);
}


// ------------- //
// order related //
// ------------- //


// get order by its id
export async function getOrderById(id: number): Promise<
  Array<{
    id: number;
    bonsaiId: number;
    amount: number;
  }>
> {
  return db.select().from(ordersTable).where(eq(ordersTable.id, id));
}

// get all orders
export async function getAllOrders(): Promise<
  Array<{
    id: number;
    bonsaiId: number;
    amount: number;
  }>
> {
  return db.select().from(ordersTable).orderBy(ordersTable.id);
}
