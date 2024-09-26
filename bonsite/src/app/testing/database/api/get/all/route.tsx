import { NextResponse } from "next/server";
import { getAllBonsais } from "../../../_queries/get"

export async function GET() {
    try {
        console.log('Fetching all bonsai...');
        const bonsai = await getAllBonsais();
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
