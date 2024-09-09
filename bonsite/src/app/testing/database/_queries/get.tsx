import { db } from "@/database/db";
import { bonsaiTable } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getAllBonsai() {
  return await db.select().from(bonsaiTable);
}

export async function getBonsaiById(id: number) {
  return await db.select().from(bonsaiTable).where(eq(bonsaiTable.id, id));
}
