import { NextResponse } from 'next/server';
import { createBonsai } from './_queries/insert';
import { InsertBonsai } from '@/database/schema';

export async function POST(request: Request) {
    try {
        const data: InsertBonsai = await request.json();
        
        
        await createBonsai(data);

        return NextResponse.json({ success: true, message: 'Bonsai created successfully!' });
    } catch (error) {
        console.error('Error creating bonsai:', error);
        
        let errorMessage = 'An error occurred';
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json({ success: false, error: errorMessage });
    }
}


// JSON DATA EXAMPLE
// {
//     "id": "UUID V4"
//     "nome": "Bonsai Example",
//     "url": "not sure about this one still, maybe a mix of name and uuid",
//     "descricao": "A beautiful bonsai tree.",
//     "preco": 49.99,
//     "categoria": "Frutíferas",
//     "sol": 3,
//     "sol_desc": "Partial sun, 4 hours a day",
//     "agua": 2,
//     "agua_desc": "Moderate watering",
//     "tamanho": 50,
//     "tamanho_desc": "Medium size bonsai, 50cm height",
//     "poda": 1,
//     "poda_desc": "Requires light pruning",
//     "solo": 2,
//     "solo_desc": "Well-draining soil",
//     "delicadeza": 3,
//     "delicadeza_desc": "Medium delicacy, handle with care",
//     "visivel": true
//   }
