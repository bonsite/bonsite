import { NextResponse } from 'next/server';
import { fetchAllBonsais } from '../_queries/all/get';

export async function GET() {
  try {
    const bonsais = await fetchAllBonsais();
    return NextResponse.json(bonsais); // Return the JSON response
  } catch (error) {
    console.error('Error fetching bonsais:', error);
    return NextResponse.error(); // Return a generic error response
  }
}
