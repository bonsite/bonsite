"use client";

import { useState } from 'react';
import '../../../style.css';

export default function AllBonsaiPage() {
    const [bonsai, setBonsai] = useState<any[]>([]);
    const [message, setMessage] = useState<string | null>(null);

    const fetchBonsai = async () => {
        try {
            const response = await fetch('/testing/database/api/get/all');
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setBonsai(data); // Atualiza os dados do bonsai no estado
            setMessage(null); // Limpa a mensagem de erro, caso exista
        } catch (error: any) {
            setMessage(error.message); // Define a mensagem de erro
            setBonsai([]); // Reseta o array bonsai em caso de erro
        }
    };

    return (
        <div className='fullPageHorizontalCenterFlex'>
            <div className='text-center mt-10 bg-gray-400 p-10 rounded-md shadow-lg w-full max-w-4xl'>
                <h3 className='font-semibold text-lg mb-4'>GET | All Bonsai</h3>

                <div className='w-full'>
                    <button onClick={fetchBonsai} className='simpleButton mb-6'>
                        Fetch All Bonsai
                    </button>

                    {message && <p className='text-red-600'>{message}</p>}

                    {bonsai.length > 0 && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b">ID</th>
                                        <th className="py-2 px-4 border-b">Nome</th>
                                        <th className="py-2 px-4 border-b">Descrição</th>
                                        <th className="py-2 px-4 border-b">Preço</th>
                                        <th className="py-2 px-4 border-b">Categoria</th>
                                        <th className="py-2 px-4 border-b">Sol</th>
                                        <th className="py-2 px-4 border-b">Água</th>
                                        <th className="py-2 px-4 border-b">Tamanho</th>
                                        <th className="py-2 px-4 border-b">Poda</th>
                                        <th className="py-2 px-4 border-b">Solo</th>
                                        <th className="py-2 px-4">Delicadeza</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bonsai.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-100 border-b">
                                            <td className="py-2 px-4 border-r border-gray-300">{item.id}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{item.nome}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{item.descricao || 'N/A'}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{typeof item.preco === 'number' ? item.preco.toFixed(2) : parseFloat(item.preco).toFixed(2)}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{item.categoria}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{item.sol || 'N/A'}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{item.agua || 'N/A'}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{item.tamanho || 'N/A'}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{item.poda || 'N/A'}</td>
                                            <td className="py-2 px-4 border-r border-gray-300">{item.solo || 'N/A'}</td>
                                            <td className="py-2 px-4">{item.delicadeza || 'N/A'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
