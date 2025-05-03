'use client';

import Link from 'next/link';
import { logout } from './login/actions'; // Importar a ação de logout
import { ReactNode } from 'react'; // Import ReactNode

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100"> 
      {/* Cabeçalho Simples do Admin */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center w-full">
        <h1 className="text-xl font-semibold text-gray-800">Painel Administrativo</h1>
        <form action={logout}>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md text-sm transition duration-150 ease-in-out"
          >
            Sair
          </button>
        </form>
      </header>

      <div className="flex flex-1"> 
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4 flex-col hidden md:flex"> 
          <nav className="flex flex-col space-y-2 mt-4"> 
            <Link href="/admin" className="hover:bg-gray-700 p-2 rounded">
              Dashboard
            </Link>
            <Link href="/admin/posts" className="hover:bg-gray-700 p-2 rounded">
              Posts
            </Link>
            {/* Adicionar outros links de navegação aqui */}
          </nav>
        </aside>

        {/* Conteúdo Principal */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
