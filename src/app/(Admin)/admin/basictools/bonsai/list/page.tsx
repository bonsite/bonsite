"use client";

import React, { useEffect, useState } from 'react';

// Define a type for the bonsai data
interface Bonsai {
    id: number;
    name: string;
    amount: number;
}

function ListBonsaiPage() {
    const [bonsais, setBonsais] = useState<Bonsai[]>([]);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchBonsais = async () => {
            try {
                const response = await fetch('/dev/testing/_database/api/get/all');
                const result = await response.json();

                if (result.success) {
                    setBonsais(result.data);
                } else {
                    setMessage(`ERROR: ${result.error}`);
                }
            } catch (error) {
                console.error('Error fetching bonsai data:', error);
                setMessage('An error occurred while fetching the bonsai data.');
            }
        };

        fetchBonsais();
    }, []);

    return (
        <div className='fullPageHorizontalCenterFlex'>
            <div className='text-center mt-10 bg-gray-400 p-10'>
                <h3 className='font-semibold'>LIST | All Bonsais</h3>
                {message && <p>{message}</p>}
                <ul>
                    {bonsais.map((bonsai) => (
                        <li key={bonsai.id}>
                            <p>ID: {bonsai.id}</p>
                            <p>Name: {bonsai.name}</p>
                            <p>Amount: {bonsai.amount}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListBonsaiPage;