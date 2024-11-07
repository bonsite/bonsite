import { db } from '@/database/db';
import { bonsaisTable } from '@/database/schema';
import { eq } from 'drizzle-orm';

export async function deleteBonsai(url : string) {
    try {
        await db.delete(bonsaisTable).where(eq(bonsaisTable.url, url));
    } catch (error) {
        throw new Error('Failed to delete bonsai: ' + error);
    }
}
