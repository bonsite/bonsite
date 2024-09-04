"use client";

import '../../style.css';
import './style.css';
import React, { useState } from 'react';



export default function Page() {

    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const id = formData.get('id');
        const name = formData.get('name');
        const amount = formData.get('amount');

        const response = await fetch('/testing/database/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: Number(id),
                name: String(name),
                amount: Number(amount),
            }),
        });

        const result = await response.json();

        if (result.success) {

            setMessage('Bonsai created successfully! F5 before testing again.');

        } else {

            setMessage(`Failed to create bonsai: ${result.error}`);

        }

    };


    return (

        <div className='fullPageHorizontalCenterFlex'>

            <div className='text-center mt-10 bg-gray-400 p-10'>

                <h3 className='font-semibold'>POST | Create Bonsai</h3>

                <div className='w-full'>

                    <form className='dbTestInputForm' onSubmit={handleSubmit}>

                        <label>
                            ID:
                            <input type='number' name='id' required />
                        </label>

                        <label>
                            Name:
                            <input type='text' name='name' required />
                        </label>

                        <label>
                            Amount:
                            <input type='number' name='amount' required />
                        </label>

                        <button type='submit' className='simpleButton'>Submit</button>

                    </form>

                    {message && <p>{message}</p>}

                </div>
            </div>
        </div>
    );
}
