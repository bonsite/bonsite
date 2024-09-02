import { db } from '../database/db';
import { eq } from 'drizzle-orm';
import { bonsaiTable, ordersTable } from '../schema';


// -------------- //
// bonsai related //
// -------------- //


// delete bonsai by id
export async function deleteBonsaiById(id: number): Promise<void> {
  await db.delete(bonsaiTable).where(eq(bonsaiTable.id, id));
}


// ------------- //
// order related //
// ------------- //


// delete order by id
export async function deleteOrderById(id: number): Promise<void> {
  await db.delete(ordersTable).where(eq(ordersTable.id, id));
}
