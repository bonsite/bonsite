"use client";

import '../../style.css';
import React, { useState } from 'react';

export default function Page() {

    const [id, setId] = useState<number | null>(null);
    const [amount, setAmount] = useState<number | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [updatedData, setUpdatedData] = useState<any | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (id === null || amount === null) {
            setMessage('Please provide both ID and amount.');
            return;
        }

        const response = await fetch(`/testing/database/api/put/${id}/${amount}`, {
            method: 'PUT',
        });

        const result = await response.json();

        if (result.success) {
            setMessage('Bonsai updated successfully!');
            setUpdatedData(result.data);
        } else {
            setMessage(`Failed to update bonsai: ${result.error}`);
            setUpdatedData(null);
        }
    };

    return (

        <div className='fullPageHorizontalCenterFlex'>

            <div className='text-center mt-10 bg-gray-400 p-10'>

                <h3 className='font-semibold'>PUT | Update Bonsai</h3>

                <div className='w-full'>

                    <form className='dbTestInputForm' onSubmit={handleSubmit}>

                        <label>
                            ID:
                            <input
                                autoComplete="off"
                                type='number'
                                value={id !== null ? id : ''}
                                onChange={(e) => setId(e.target.value ? parseInt(e.target.value) : null)}
                                required
                            />
                        </label>

                        <label>
                            New Amount:
                            <input
                                autoComplete="off"
                                type='number'
                                value={amount !== null ? amount : ''}
                                onChange={(e) => setAmount(e.target.value ? parseInt(e.target.value) : null)}
                                required
                            />
                        </label>

                        <button type='submit' className='simpleButton'>Update</button>

                    </form>

                    {message && <p>{message}</p>}

                    {updatedData && (
                        <div className='mt-5'>
                            <h4 className='font-semibold'>Updated Bonsai:</h4>
                            <pre>{JSON.stringify(updatedData, null, 2)}</pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
