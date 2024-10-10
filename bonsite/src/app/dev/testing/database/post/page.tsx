"use client";

import '../../style.css';
import React, { useState } from 'react';

export default function Page() {
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const nome = formData.get('nome');
        const descricao = formData.get('descricao');
        const preco = formData.get('preco');
        const categoria = formData.get('categoria');
        const sol = formData.get('sol');
        const agua = formData.get('agua');
        const tamanho = formData.get('tamanho');
        const poda = formData.get('poda');
        const solo = formData.get('solo');
        const delicadeza = formData.get('delicadeza');

        const response = await fetch('/dev/testing/database/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: String(nome),
                descricao: String(descricao),
                preco: Number(preco),
                categoria: String(categoria),
                sol: sol ? Number(sol) : null,
                agua: agua ? Number(agua) : null,
                tamanho: tamanho ? Number(tamanho) : null,
                poda: poda ? Number(poda) : null,
                solo: solo ? Number(solo) : null,
                delicadeza: delicadeza ? Number(delicadeza) : null,
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
                        <div className='form-group'>
                            <label>
                                Nome:
                                <input
                                    autoComplete="off"
                                    type='text'
                                    name='nome'
                                    required
                                    className='form-input'
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Descrição:
                                <textarea
                                    autoComplete="off"
                                    name='descricao'
                                    className='form-input'
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Preço:
                                <input
                                    autoComplete="off"
                                    type='number'
                                    step='0.01'
                                    name='preco'
                                    required
                                    className='form-input'
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Categoria:
                                <select name='categoria' required className='form-input'>
                                    <option value="Indefinida">Indefinida</option>
                                    <option value="Frutíferas">Frutíferas</option>
                                    <option value="Floríferas">Floríferas</option>
                                    <option value="Perenes">Perenes</option>
                                    <option value="Caducifólias">Caducifólias</option>
                                </select>
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Sol (1-10):
                                <input
                                    autoComplete="off"
                                    type='number'
                                    name='sol'
                                    min='1'
                                    max='10'
                                    className='form-input'
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Água (1-10):
                                <input
                                    autoComplete="off"
                                    type='number'
                                    name='agua'
                                    min='1'
                                    max='10'
                                    className='form-input'
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Tamanho (1-10):
                                <input
                                    autoComplete="off"
                                    type='number'
                                    name='tamanho'
                                    min='1'
                                    max='10'
                                    className='form-input'
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Poda (1-10):
                                <input
                                    autoComplete="off"
                                    type='number'
                                    name='poda'
                                    min='1'
                                    max='10'
                                    className='form-input'
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Solo (1-10):
                                <input
                                    autoComplete="off"
                                    type='number'
                                    name='solo'
                                    min='1'
                                    max='10'
                                    className='form-input'
                                />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label>
                                Delicadeza (1-10):
                                <input
                                    autoComplete="off"
                                    type='number'
                                    name='delicadeza'
                                    min='1'
                                    max='10'
                                    className='form-input'
                                />
                            </label>
                        </div>

                        <button type='submit' className='simpleButton'>Submit</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
}
