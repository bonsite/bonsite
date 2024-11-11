import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    let url = formData.get('url') as string;

    
    const directory = `./public/images/bonsais/${url}`;
    const path = `${directory}/cover${file.name.slice(file.name.lastIndexOf('.'))}`;

    

    await fs.mkdir(directory, { recursive: true });


    await fs.writeFile(path, buffer);

    revalidatePath("/");

    return NextResponse.json({ status: "success" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}