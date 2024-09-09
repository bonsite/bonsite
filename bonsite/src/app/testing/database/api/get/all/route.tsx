import { NextResponse } from "next/server";
import { getAllBonsai } from "../../../_queries/get";

export async function GET() {
    try {
        console.log('Fetching all bonsai...');
        const bonsai = await getAllBonsai();
        console.log('Fetched bonsai list:', bonsai);
        return NextResponse.json({ success: true, data: bonsai }, { headers: { 'Cache-Control': 'no-store' } });
    } catch (error) {
        console.error('Error fetching all bonsai:', error);
        let errorMessage = 'An error occurred while fetching bonsai';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return NextResponse.json({ success: false, error: errorMessage });
    }
}
