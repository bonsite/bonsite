import { db } from '../database/db';
import { InsertOrder, InsertBonsai, ordersTable, bonsaiTable } from '../schema';


// -------------- //
// bonsai related //
// -------------- //


// create new bonsai
export async function createBonsai(data: InsertBonsai) {
  await db.insert(bonsaiTable).values(data);
}


// ------------- //
// order related //
// ------------- //


// create new order
export async function createOrder(data: InsertOrder) {
  await db.insert(ordersTable).values(data);
}
