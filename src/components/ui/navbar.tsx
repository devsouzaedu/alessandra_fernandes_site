"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Atendimento", href: "/atendimento" },
  { name: "Ferramentas", href: "/ferramentas" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav className="container flex items-center justify-between py-4">
        <Link 
          href="/" 
          className="flex items-center text-black font-bold no-underline"
        >
          <span className="font-montserrat font-bold text-xl">Alessandra Fernandes</span>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-black hover:text-gray-600 transition-colors py-2 no-underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700"
          >
            <span className="sr-only">Abrir menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <div className="space-y-1 py-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block font-medium text-black hover:bg-primary px-3 py-2 rounded-md no-underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 