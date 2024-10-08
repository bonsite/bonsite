import { NextResponse } from "next/server";
import { getAllBonsais } from "../../../_queries/get"

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function GET() {

        let bonsai = await getAllBonsais();
        
        return NextResponse.json(bonsai);
}

