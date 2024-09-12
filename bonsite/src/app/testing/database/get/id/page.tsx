"use client";

import { useState } from 'react';
import '../../../style.css';

export default function BonsaiByIdPage() {
    const [id, setId] = useState<number | ''>('');
    const [bonsai, setBonsai] = useState<any>(null);
    const [message, setMessage] = useState<string | null>(null);

    const fetchBonsaiById = async () => {
        if (id === '' || isNaN(id)) {
            setMessage('Please enter a valid ID.');
            return;
        }

        try {
            const response = await fetch(`/testing/database/api/get/id/${id}`);
            const result = await response.json();
            if (result.success) {
                setBonsai(result.data);
                setMessage(null); // Clear any previous messages
            } else {
                setMessage(`ERRROR: ${result.error}`);
                setBonsai(null); // Clear previous bonsai data
            }
        } catch (error) {
            setMessage('An error occurred while fetching bonsai.');
            setBonsai(null); // Clear previous bonsai data
        }
    };

    return (
        <div className='fullPageHorizontalCenterFlex'>
            <div className='text-center mt-10 bg-gray-400 p-10'>
                <h3 className='font-semibold'>GET | Bonsai by ID</h3>

                <div className='w-full'>
                    <label>
                        ID:
                        <input
                            autoComplete="off"
                            type='number'
                            value={id}
                            onChange={(e) => setId(Number(e.target.value))}
                            className='simpleInput'
                        />
                    </label>

                    <button onClick={fetchBonsaiById} className='simpleButton'>
                        Fetch Bonsai
                    </button>

                    {message && <p>{message}</p>}

                    {bonsai && (
                        <div>
                            <p>ID: {bonsai.id}</p>
                            <p>Name: {bonsai.name}</p>
                            <p>Amount: {bonsai.amount}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}