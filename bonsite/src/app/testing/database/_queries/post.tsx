import { db } from '@/database/db';
import { bonsaiTable, InsertBonsai } from '@/database/schema';

export async function createBonsai(data: InsertBonsai) {

  await db.insert(bonsaiTable).values(data);
  
}