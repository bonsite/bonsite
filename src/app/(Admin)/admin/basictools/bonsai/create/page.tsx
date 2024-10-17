'use client';

import { useState, useEffect } from 'react';
import generateUUID from "@/utils/UUID/generateUUID";

export default function CreateBonsai() {
  // State to manage form data
  const [bonsai, setBonsai] = useState({
    id: '', // UUID will be populated when page loads
    nome: '',
    url: '',
    descricao: '',
    preco: '',
    categoria: 'Indefinida', // Default category
    sol: '',
    sol_desc: '',
    agua: '',
    agua_desc: '',
    tamanho: '',
    tamanho_desc: '',
    poda: '',
    poda_desc: '',
    solo: '',
    solo_desc: '',
    delicadeza: '',
    delicadeza_desc: '',
    visivel: true // Default to true
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // Add your UUID generation logic here
  useEffect(() => {
    const generatedUUID = generateUUID(); 
    setBonsai((prevState) => ({ ...prevState, id: generatedUUID }));
    updateURL(generatedUUID, '');
  }, []);

  // Update URL based on the name and id
  useEffect(() => {
    updateURL(bonsai.id, bonsai.nome);
  }, [bonsai.nome, bonsai.id]);

  const updateURL = (id: string, name: string) => {
    const formattedName = name.toLowerCase().replace(/\s+/g, '-');
    const url = name ? `${formattedName}-${id.substring(0, 3)}` : '';
    setBonsai((prevState) => ({ ...prevState, url }));
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBonsai((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage(''); // Clear previous message
    setIsSuccess(null); // Reset success/error status

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
        setResponseMessage('Bonsai created successfully!');
      } else {
        setIsSuccess(false);
        setResponseMessage(result.error || 'Error creating bonsai.');
      }
    } catch (error) {
      setIsSuccess(false);
      setResponseMessage('An unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Create a New Bonsai</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* UUID Field - Read-only */}
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">Bonsai ID (Generated)</label>
            <input
              type="text"
              id="id"
              name="id"
              value={bonsai.id}
              readOnly
              className="mt-1 block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={bonsai.nome}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* URL Field - Read-only */}
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL (Generated)</label>
            <input
              type="text"
              id="url"
              name="url"
              value={bonsai.url}
              readOnly
              className="mt-1 block w-full bg-gray-200 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="preco" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="preco"
              name="preco"
              value={bonsai.preco}
              onChange={handleChange}
              required
              step="0.01"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="categoria"
              name="categoria"
              value={bonsai.categoria}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Indefinida">Indefinida</option>
              <option value="Frutíferas">Frutíferas</option>
              <option value="Floríferas">Floríferas</option>
              <option value="Perenes">Perenes</option>
              <option value="Caducifólias">Caducifólias</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="descricao"
              name="descricao"
              value={bonsai.descricao}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Sun, Water, Size, Pruning, Soil, and Delicacy Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Sun" name="sol" value={bonsai.sol} handleChange={handleChange} />
            <InputField label="Sun Description" name="sol_desc" value={bonsai.sol_desc} handleChange={handleChange} />
            <InputField label="Water" name="agua" value={bonsai.agua} handleChange={handleChange} />
            <InputField label="Water Description" name="agua_desc" value={bonsai.agua_desc} handleChange={handleChange} />
            <InputField label="Size" name="tamanho" value={bonsai.tamanho} handleChange={handleChange} />
            <InputField label="Size Description" name="tamanho_desc" value={bonsai.tamanho_desc} handleChange={handleChange} />
            <InputField label="Pruning" name="poda" value={bonsai.poda} handleChange={handleChange} />
            <InputField label="Pruning Description" name="poda_desc" value={bonsai.poda_desc} handleChange={handleChange} />
            <InputField label="Soil" name="solo" value={bonsai.solo} handleChange={handleChange} />
            <InputField label="Soil Description" name="solo_desc" value={bonsai.solo_desc} handleChange={handleChange} />
            <InputField label="Delicacy" name="delicadeza" value={bonsai.delicadeza} handleChange={handleChange} />
            <InputField label="Delicacy Description" name="delicadeza_desc" value={bonsai.delicadeza_desc} handleChange={handleChange} />
          </div>

          {/* Visible */}
          <div>
            <label htmlFor="visivel" className="block text-sm font-medium text-gray-700">Visible</label>
            <input
              type="checkbox"
              id="visivel"
              name="visivel"
              checked={bonsai.visivel}
              onChange={(e) => setBonsai((prevState) => ({ ...prevState, visivel: e.target.checked }))}
              className="mt-1"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Create Bonsai
            </button>
          </div>

          {/* Response Message */}
          {responseMessage && (
            <div className={`mt-4 text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  function InputField({ label, name, value, handleChange }: InputFieldProps) {
    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    );
  }
  
