import { NextResponse } from 'next/server';
import { fetchBonsaiByUrl } from '../../_queries/url/get';
import { NextRequest } from 'next/server';

import { unstable_noStore as noStore } from 'next/cache';

// This will handle the dynamic route for fetching bonsai by URL
export async function GET(request: NextRequest, { params }: { params: { URL: string } }) {

  noStore();

  const bonsaiURL = params.URL; // Extract the URL from the dynamic route
  
  try {
    const bonsai = await fetchBonsaiByUrl(bonsaiURL);

    if (!bonsai) {
      return NextResponse.json({ message: 'Bonsai not found' }, { status: 404 });
    }

    return NextResponse.json(bonsai); // Return the bonsai if found
  } catch (error) {
    console.error('Error fetching bonsai by URL:', error);
    return NextResponse.error(); // Return a generic error response
  }
}