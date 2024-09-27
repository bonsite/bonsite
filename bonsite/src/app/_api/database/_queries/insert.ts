import { db } from "@/database/db";
import { bonsaisTable, InsertBonsai } from "@/database/schema";


export async function createBonsai(data: InsertBonsai){

    await db.insert(bonsaisTable).values(data);
}