// import { NextResponse } from "next/server";
// import { updateBonsaiAmount } from "../../../../_queries/put"

// export async function PUT(request: Request, { params }: { params: { id: string; amount: string } }) {
//     try {
//         const id = parseInt(params.id);
//         const amount = parseInt(params.amount);

//         if (isNaN(id)) {
//             return NextResponse.json({ success: false, error: 'Invalid ID' });
//         }

//         if (isNaN(amount) || amount < 0) {
//             return NextResponse.json({ success: false, error: 'Invalid amount' });
//         }

//         const updatedBonsai = await updateBonsaiAmount(id, amount);

//         if (updatedBonsai.length === 0) {
//             return NextResponse.json({ success: false, error: 'Bonsai not found or no changes made' });
//         }

//         return NextResponse.json({ success: true, data: updatedBonsai[0] });
//     } catch (error) {
//         console.error('Error updating bonsai:', error);

//         let errorMessage = 'An error occurred while updating bonsai';
//         if (error instanceof Error) {
//             errorMessage = error.message;
//         }

//         return NextResponse.json({ success: false, error: errorMessage });
//     }
// }
