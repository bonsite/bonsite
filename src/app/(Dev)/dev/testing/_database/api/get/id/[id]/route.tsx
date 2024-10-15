// import { NextResponse } from "next/server";
// import { getBonsaiById } from "../../../../_queries/get";

// export async function GET(request: Request, { params }: { params: { id: string } }) {
//     try {
//         const id = parseInt(params.id);
//         if (isNaN(id)) {
//             return NextResponse.json({ success: false, error: 'Invalid ID' });
//         }
//         const bonsai = await getBonsaiById(id);
//         if (bonsai.length === 0) {
//             return NextResponse.json({ success: false, error: 'Bonsai not found' });
//         }
//         return NextResponse.json({ success: true, data: bonsai[0] });
//     } catch (error) {
//         console.error('Error fetching bonsai by ID:', error);
//         let errorMessage = 'An error occurred while fetching bonsai by ID';
//         if (error instanceof Error) {
//             errorMessage = error.message;
//         }
//         return NextResponse.json({ success: false, error: errorMessage });
//     }
// }
