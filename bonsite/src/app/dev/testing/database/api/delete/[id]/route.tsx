// import { NextResponse } from "next/server";
// import { deleteBonsai } from "../../../_queries/delete";

// export async function DELETE(request: Request, { params }: { params: { id: string } }) {
//     try {
//         const id = parseInt(params.id);

//         if (isNaN(id)) {
//             return NextResponse.json({ success: false, error: 'Invalid ID' });
//         }

//         // call the delete query
//         const deletedRows = await deleteBonsai(id);

//         // check if any rows were deleted
//         if (deletedRows.length === 0) {
//             return NextResponse.json({ success: false, error: 'Bonsai not found' });
//         }

//         // return success and the deleted bonsai data
//         return NextResponse.json({ success: true, data: deletedRows[0] });
//     } catch (error) {
//         console.error('Error deleting bonsai:', error);

//         let errorMessage = 'An error occurred while deleting bonsai';
//         if (error instanceof Error) {
//             errorMessage = error.message;
//         }

//         return NextResponse.json({ success: false, error: errorMessage });
//     }
// }
