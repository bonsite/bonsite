"use client";
import { useState } from 'react';
import '../../style.css';

// Define a type for the bonsai data
interface Bonsai {
    id: number;
    name: string;
    amount: number;
}

export default function DeleteBonsaiPage() {
    const [id, setId] = useState<number | ''>('');
    const [deletedBonsai, setDeletedBonsai] = useState<Bonsai | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const handleDelete = async () => {
        if (id === '' || isNaN(Number(id))) {
            setMessage('Please enter a valid ID.');
            return;
        }

        try {
            const response = await fetch(`/testing/database/api/delete/${id}`, {
                method: 'DELETE',
            });

            const result = await response.json();

            if (result.success) {
                setDeletedBonsai(result.data); // get the deleted bonsai details
                setMessage('Bonsai deleted successfully!');
            } else {
                setMessage(`ERROR: ${result.error}`);
                setDeletedBonsai(null); // clear previous bonsai data
            }
        } catch (error) {
            setMessage('An error occurred while deleting the bonsai.');
            setDeletedBonsai(null); // clear previous bonsai data
        }
    };

    return (
        <div className='fullPageHorizontalCenterFlex'>
            <div className='text-center mt-10 bg-gray-400 p-10'>
                <h3 className='font-semibold'>DELETE | Bonsai by ID</h3>
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
                    <br /> {/* Add a line break for spacing */}
                    <button onClick={handleDelete} className='simpleButton'>
                        Delete Bonsai
                    </button>
                    <br /> {/* Add a line break for spacing */}
                    {message && <p>{message}</p>}
                    {deletedBonsai && (
                        <div>
                            <p>ID: {deletedBonsai.id}</p>
                            <p>Name: {deletedBonsai.name}</p>
                            <p>Amount: {deletedBonsai.amount}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}