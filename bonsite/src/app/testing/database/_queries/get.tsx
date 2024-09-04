import { db } from "@/database/db";
import { bonsaiTable } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function getAllBonsai(){

    await db.select().from(bonsaiTable);

}

export async function getBonsaiById(id: number){

    await db.select().from(bonsaiTable).where(eq(bonsaiTable.id, id));
    
}




// saving this version in case sonar smells something

// export async function getAllBonsai(): Promise<Array<{
//     id: number;
//     name: string;
//     amount: number;
// }>
// >{

//     return db.select().from(bonsaiTable)
// }