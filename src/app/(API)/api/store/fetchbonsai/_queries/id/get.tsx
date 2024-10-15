import { db } from "@/database/db";
import { bonsaisTable } from "@/database/schema";
import { eq } from "drizzle-orm";

// Function to fetch a bonsai by ID (UUID)
export async function fetchBonsaiById(id: string) {
  const bonsai = await db
    .select()
    .from(bonsaisTable)
    .where(eq(bonsaisTable.id, id)) // Keep id as string (UUID)
    .limit(1);

  return bonsai[0] || null; // Return the first result or null if not found
}