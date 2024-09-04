import { db } from "@/database/db";
import { bonsaiTable } from "@/database/schema";
import { eq } from "drizzle-orm";


export async function deleteBonsai(id: number){

    return await db.delete(bonsaiTable).where(eq(bonsaiTable.id, id)).returning();

}