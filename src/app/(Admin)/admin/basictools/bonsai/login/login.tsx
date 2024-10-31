import React, { useState } from 'react';

const Login: React.FC = () => {
  const [accessCode, setAccessCode] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccessCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (accessCode === '123456') {
      setMessage('Login bem-sucedido!');
    } else {
      setMessage('Código de acesso incorreto. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700">Código de Acesso</label>
            <input
              type="text"
              id="accessCode"
              name="accessCode"
              value={accessCode}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Entrar
          </button>
        </form>
        {message && (
          <div className={`mt-4 p-2 text-center ${accessCode === '123456' ? 'text-green-700' : 'text-red-700'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;