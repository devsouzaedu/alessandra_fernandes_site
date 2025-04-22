// src/components/layout/navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre Mim' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo ou Nome */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-brand-green">
              Dra. Alessandra Fernandes
            </Link>
          </div>

          {/* Navegação Desktop (Simples por enquanto) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-brand-green transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botão Hamburguer Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Abrir menu"
              className="text-gray-700 hover:text-brand-green focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu Overlay Mobile */}
      <div
        className={`fixed inset-0 bg-brand-green bg-opacity-95 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden flex flex-col`} // Adicionado flex flex-col
      >
        {/* Botão Fechar */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            aria-label="Fechar menu"
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <X className="h-8 w-8" />
          </button>
        </div>
        {/* Itens do Menu Centralizados */}
        <div className="flex flex-col items-center justify-center flex-grow space-y-8 -mt-12"> {/* Ajustado para centralizar */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-2xl font-semibold hover:text-gray-200"
              onClick={toggleMenu} // Fecha o menu ao clicar no link
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 