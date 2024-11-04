'use client';

import { useState, useEffect } from 'react';
import generateUUID from "@/utils/UUID/generateUUID";

export default function CreateBonsai() {
  const [bonsai, setBonsai] = useState({
    id: '',
    nome: '',
    url: '',
    descricao: '',
    preco: '',
    categoria: 'Indefinida',
    sol: 1,
    sol_desc: '',
    agua: 1,
    agua_desc: '',
    tamanho: 1,
    tamanho_desc: '',
    poda: 1,
    poda_desc: '',
    solo: 1,
    solo_desc: '',
    delicadeza: 1,
    delicadeza_desc: '',
    visivel: true,
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const generatedUUID = generateUUID(); 
    setBonsai((prevState) => ({ ...prevState, id: generatedUUID }));
    updateURL(generatedUUID, '');
  }, []);

  useEffect(() => {
    updateURL(bonsai.id, bonsai.nome);
  }, [bonsai.nome, bonsai.id]);

  const updateURL = (id: string, name: string) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, '-');
    const url = name ? `${formattedName}-${id.substring(0, 3)}` : '';
    setBonsai((prevState) => ({ ...prevState, url }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBonsai((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage('');
    setIsSuccess(null);

    try {
      const response = await fetch('/api/admin/basictools/bonsai/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bonsai),
      });
      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setResponseMessage('Bonsai criado com sucesso!');
      } else {
        setIsSuccess(false);
        setResponseMessage(result.error || 'Erro ao criar o bonsai.');
      }
    } catch (error) {
      setIsSuccess(false);
      setResponseMessage('Ocorreu um erro inesperado.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Criar um Novo Bonsai</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField label="ID do Bonsai (Gerado)" name="id" value={bonsai.id} readOnly />
          <InputField label="Nome" name="nome" value={bonsai.nome} handleChange={handleChange} />
          <InputField label="URL (Gerada)" name="url" value={bonsai.url} readOnly />

          <div>
            <label htmlFor="preco" className="block text-sm font-medium text-gray-700">Preço (R$)</label>
            <input
              type="number"
              id="preco"
              name="preco"
              value={bonsai.preco}
              onChange={handleChange}
              required
              step="0.01"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          {/* Category with green select box */}
          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoria</label>
            <select
              id="categoria"
              name="categoria"
              value={bonsai.categoria}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm text-green-700"
            >
              <option value="Indefinida">Indefinida</option>
              <option value="Frutíferas">Frutíferas</option>
              <option value="Floríferas">Floríferas</option>
              <option value="Perenes">Perenes</option>
              <option value="Caducifólias">Caducifólias</option>
            </select>
          </div>

          <TextAreaField label="Descrição" name="descricao" value={bonsai.descricao} handleChange={handleChange} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SliderField label="Sol (1-10)" name="sol" value={bonsai.sol.toString()} handleChange={handleChange} />
            <TextAreaField label="Descrição do Sol" name="sol_desc" value={bonsai.sol_desc} handleChange={handleChange} />
            <SliderField label="Água (1-10)" name="agua" value={bonsai.agua.toString()} handleChange={handleChange} />
            <TextAreaField label="Descrição da Água" name="agua_desc" value={bonsai.agua_desc} handleChange={handleChange} />
            <SliderField label="Tamanho (1-10)" name="tamanho" value={bonsai.tamanho.toString()} handleChange={handleChange} />
            <TextAreaField label="Descrição do Tamanho" name="tamanho_desc" value={bonsai.tamanho_desc} handleChange={handleChange} />
            <SliderField label="Poda (1-10)" name="poda" value={bonsai.poda.toString()} handleChange={handleChange} />
            <TextAreaField label="Descrição da Poda" name="poda_desc" value={bonsai.poda_desc} handleChange={handleChange} />
            <SliderField label="Solo (1-10)" name="solo" value={bonsai.solo.toString()} handleChange={handleChange} />
            <TextAreaField label="Descrição do Solo" name="solo_desc" value={bonsai.solo_desc} handleChange={handleChange} />
            <SliderField label="Delicadeza (1-10)" name="delicadeza" value={bonsai.delicadeza.toString()} handleChange={handleChange} />
            <TextAreaField label="Descrição da Delicadeza" name="delicadeza_desc" value={bonsai.delicadeza_desc} handleChange={handleChange} />
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={bonsai.visivel}
                onChange={() => setBonsai((prev) => ({ ...prev, visivel: !prev.visivel }))}
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-700">Visível</span>
            </label>
          </div>

          {responseMessage && (
            <div className={`mt-4 text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {responseMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Criar Bonsai
          </button>
        </form>
      </div>
    </div>
  );
}

interface InputProps {
  label: string;
  name: string;
  value: string;
  readOnly?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField = ({ label, name, value, handleChange, readOnly }: InputProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      readOnly={readOnly}
      className={`mt-1 block w-full ${readOnly ? 'bg-gray-200' : 'border'} border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm`}
    />
  </div>
);

const TextAreaField = ({ label, name, value, handleChange }: InputProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      rows={3}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
    />
  </div>
);

interface SliderFieldProps {
  label: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SliderField = ({ label, name, value, handleChange }: SliderFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="range"
      id={name}
      name={name}
      min="1"
      max="10"
      value={value}
      onChange={handleChange}
      className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
    />
    <div className="text-center mt-1 text-sm text-gray-500">{value}</div>
  </div>
);