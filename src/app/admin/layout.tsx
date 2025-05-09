'use client';

import Link from 'next/link';
import { logout } from './login/actions';
import { ReactNode, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Função para abrir/fechar menu móvel
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Cabeçalho Responsivo */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center w-full">
        <div className="flex items-center">
          {/* Botão do menu móvel */}
          <button
            onClick={toggleMobileMenu}
            className="mr-4 md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Painel Administrativo</h1>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md text-sm transition duration-150 ease-in-out"
          >
            Sair
          </button>
        </form>
      </header>

      <div className="flex flex-1 relative">
        {/* Menu móvel para dispositivos pequenos - aparece como overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden" onClick={toggleMobileMenu}>
            <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
            <nav
              className="fixed top-0 left-0 bottom-0 flex flex-col w-64 max-w-sm bg-gray-800 text-white p-4 transform transition-all ease-in-out duration-300 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button
                  className="text-white hover:text-gray-300 focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/admin" 
                  className="hover:bg-gray-700 p-2 rounded"
                  onClick={toggleMobileMenu}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/admin/posts" 
                  className="hover:bg-gray-700 p-2 rounded"
                  onClick={toggleMobileMenu}
                >
                  Posts
                </Link>
                {/* Adicionar outros links de navegação aqui */}
              </div>
            </nav>
          </div>
        )}

        {/* Sidebar para desktop */}
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

        {/* Conteúdo Principal - com padding ajustado para mobile */}
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
