import { NextResponse } from "next/server";
import { getAllBonsai, getBonsaiById  } from "../../../_queries/get";


export async function GET() {
    try {
        const bonsai = await getAllBonsai();
        return NextResponse.json({ success: true, data: bonsai });
    } catch (error) {
        console.error('Error fetching bonsai:', error);

        let errorMessage = 'An error occurred while fetching bonsai';
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json({ success: false, error: errorMessage });
    }
}