import React from 'react';
import { login } from './actions'; // Server Action a ser criada

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        action={login} // Chama a Server Action
        className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login Admin</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Usuário
          </label>
          <input
            type="text"
            id="username"
            name="username" // Importante: nome deve corresponder ao esperado na action
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password" // Importante: nome deve corresponder ao esperado na action
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Entrar
        </button>
        {/* TODO: Adicionar tratamento de erro visual para o usuário */}
      </form>
    </div>
  );
}
