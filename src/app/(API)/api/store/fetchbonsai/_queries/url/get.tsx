import { db } from "@/database/db";
import { bonsaisTable } from "@/database/schema";
import { eq } from "drizzle-orm";

// Function to fetch a bonsai by URL (mix of name + uuid)
export async function fetchBonsaiByUrl(url: string) {
  const bonsai = await db
    .select()
    .from(bonsaisTable)
    .where(eq(bonsaisTable.url, url))
    .limit(1);

  return bonsai[0] || null; // Return the first result or null if not found
}