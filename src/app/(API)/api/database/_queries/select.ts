import { db } from "@/database/db";
import { bonsaisTable } from "@/database/schema";


export async function getAllBonsais(){
    
    return await db.select().from(bonsaisTable);
}