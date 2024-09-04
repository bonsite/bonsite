"use client";

import { useState } from 'react';
import '../../../style.css';

export default function AllBonsaiPage() {
    const [bonsai, setBonsai] = useState<any[]>([]);
    const [message, setMessage] = useState<string | null>(null);

    const fetchBonsai = async () => {
        try {
            const response = await fetch('/testing/database/api/get/all', { cache: "no-store" });
            const result = await response.json();
            if (result.success) {
                setBonsai(result.data);
                setMessage(null); // Clear any previous messages
            } else {
                setMessage(`Failed to fetch bonsai: ${result.error}`);
                setBonsai([]); // Clear previous bonsai data
            }
        } catch (error) {
            setMessage('An error occurred while fetching bonsai.');
            setBonsai([]); // Clear previous bonsai data
        }
    };

    return (
        <div className='fullPageHorizontalCenterFlex'>
            <div className='text-center mt-10 bg-gray-400 p-10'>
                <h3 className='font-semibold'>GET | All Bonsai</h3>

                <div className='w-full'>
                    <button onClick={fetchBonsai} className='simpleButton'>
                        Fetch All Bonsai
                    </button>

                    {message && <p>{message}</p>}

                    {bonsai.length > 0 && (
                        <ul>
                            {bonsai.map((item) => (
                                <li key={item.id}>
                                    ID: {item.id}, Name: {item.name}, Amount: {item.amount}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
