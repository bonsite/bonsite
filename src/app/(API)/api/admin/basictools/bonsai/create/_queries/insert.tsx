import { db } from '@/database/db';
import { bonsaisTable, InsertBonsai } from '@/database/schema';

export async function createBonsai(data: InsertBonsai) {
    try {
        await db.insert(bonsaisTable).values(data);
    } catch (error) {
        throw new Error('Failed to insert bonsai: ' + error);
    }
}
