import { NextResponse, NextRequest } from 'next/server';
import { deleteBonsai } from '../_queries/delete';
import { unstable_noStore as noStore } from 'next/cache';

export async function DELETE(request: NextRequest, { params }: { params: { URL: string } }) {

    noStore();
  
    const bonsaiURL = params.URL; // Extract the URL from the dynamic route


    try {
        
        await deleteBonsai(bonsaiURL);

        return NextResponse.json({ success: true, message: 'Bonsai deleted successfully!' });

    } catch (error) {
        console.error('Error deleting bonsai:', error);
        
        let errorMessage = 'An error occurred';
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json({ success: false, error: errorMessage });
    }
}