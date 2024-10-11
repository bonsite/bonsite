import { db } from "@/database/db";
import { bonsaisTable } from "@/database/schema";
import { eq } from "drizzle-orm";

// Function to fetch a bonsai by ID
export async function fetchBonsaiById(id: string) {
  const bonsaiId = Number(id); // Convert the string ID to a number

  const bonsai = await db
    .select()
    .from(bonsaisTable)
    .where(eq(bonsaisTable.id, bonsaiId))
    .limit(1);

  return bonsai[0] || null; // Return the first result or null if not found
}
