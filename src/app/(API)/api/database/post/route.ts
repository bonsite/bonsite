import { NextResponse } from "next/server";
import { createBonsai } from "../_queries/insert";


export async function POST(request: Request) {
    try {
        const data = await request.json();
        await createBonsai(data);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error creating bonsai:', error);
        
        let errorMessage = 'An error occurred';
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json({ success: false, error: errorMessage });
    }
}