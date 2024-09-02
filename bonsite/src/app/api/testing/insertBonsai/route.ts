import { NextResponse } from 'next/server';
import { db } from "@/database/db";
import { bonsaiTable } from "@/schema";

export async function POST(request: Request) {
    const data = await request.json();
    await db.insert(bonsaiTable).values(data);
    return NextResponse.json({ success: true });
}
