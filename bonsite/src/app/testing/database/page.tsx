"use client"; // Add this at the top of the file

import { useState } from 'react';

export default function Page() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = {
            id: 10,
            name: 'Laranja',
            amount: 4,
        };
        
        const response = await fetch('/api/testing/insertBonsai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        
        const result = await response.json();
        if (result.success) {
            alert('Bonsai inserted successfully');
        } else {
            alert('Error inserting bonsai');
        }

        setIsSubmitting(false);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Bonsite | Dev</h1>
            <h2>Database Testing</h2>

            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
                <form onSubmit={handleSubmit}>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </main>
    );
}
