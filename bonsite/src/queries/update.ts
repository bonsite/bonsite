import { eq, sql } from 'drizzle-orm';
import { db } from '../database/db';
import { bonsaiTable } from '../schema';


// -------------- //
// bonsai related //
// -------------- //


// subract amount from bonsai based on it's id
export async function subtractBonsaiAmount(id: number, amountToSubtract: number): Promise<void> {
  await db
    .update(bonsaiTable)
    .set({
      amount: sql`${bonsaiTable.amount} - ${amountToSubtract}`,
    })
    .where(eq(bonsaiTable.id, id));
}