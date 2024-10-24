import { NextResponse } from 'next/server';
import { fetchAllBonsais } from '../_queries/all/get';
import { unstable_noStore as noStore } from 'next/cache';


export async function GET() {

  noStore();

  try {
    const bonsais = await fetchAllBonsais();
    return NextResponse.json(bonsais); // Return the JSON response
  } catch (error) {
    console.error('Error fetching bonsais:', error);
    return NextResponse.error(); // Return a generic error response
  }
}
