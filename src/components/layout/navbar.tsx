// src/components/layout/navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  // Alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Fechar o menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fechar o menu quando a rota mudar
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Controlar a rolagem do corpo quando o menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo_alessandra_normal.png" 
                alt="Logo Alessandra Fernandes" 
                width={120} 
                height={60}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Navegação Desktop - Centralizada */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-6 mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-green transition-colors duration-300 px-4 py-2 rounded-full font-lexend text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
            
          {/* Botão Agendar Consulta */}
          <div className="hidden md:block">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand-green text-white rounded-full hover:bg-primary-dark transition-colors duration-300 font-lexend text-sm"
            >
              Agendar Consulta
            </Link>
          </div>

          {/* Botão Hamburguer Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="text-gray-700 hover:text-brand-green focus:outline-none"
              type="button"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Overlay Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brand-green bg-opacity-95 backdrop-blur-sm z-50 md:hidden flex flex-col overflow-auto">
          {/* Botão Fechar */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              aria-label="Fechar menu"
              className="text-white hover:text-gray-200 focus:outline-none"
              type="button"
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
                className="text-white text-xl font-semibold hover:text-gray-200 font-lexend"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Botão Agendar Consulta */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-white text-brand-green rounded-full hover:bg-gray-100 transition-colors duration-300 font-lexend"
              onClick={closeMenu}
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 