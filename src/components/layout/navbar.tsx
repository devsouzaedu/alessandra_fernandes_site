// src/components/layout/navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// Link para WhatsApp para agendar consulta
const WHATSAPP_LINK = "https://wa.me/5511963074495?text=Oi!%20gostaria%20de%20agendar%20uma%20consulta...";

const navItems = [
  { href: '/', label: 'Início' },
  { href: '/consulta', label: 'Consulta' },
  { href: '/especialidades', label: 'Especialidades' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/espaco', label: 'Espaço' },
  { href: '/sobremim', label: 'Sobre Mim' },
  { href: '/endereco', label: 'Endereço' },
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
            <Link href="/" className="text-xl font-bold text-brand-green font-special-gothic">
              Dra. Alessandra Fernandes
            </Link>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-green transition-colors duration-300 px-3 py-2 font-special-gothic"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Botão Agendar Consulta */}
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 px-4 py-2 bg-brand-green text-white rounded-md hover:bg-primary-dark transition-colors duration-300 font-special-gothic"
            >
              Agendar Consulta
            </Link>
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
          } md:hidden flex flex-col`}
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
        <div className="flex flex-col items-center justify-center flex-grow space-y-6 -mt-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-xl font-semibold hover:text-gray-200 font-special-gothic"
              onClick={toggleMenu} // Fecha o menu ao clicar no link
            >
              {item.label}
            </Link>
          ))}
          
          {/* Botão Agendar Consulta */}
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 bg-white text-brand-green rounded-md hover:bg-gray-100 transition-colors duration-300 font-special-gothic"
            onClick={toggleMenu}
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </nav>
  );
} 