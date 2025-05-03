'use client'; // Adiciona diretiva para Componente de Cliente

import { useState } from 'react'; // Importa useState
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserCog } from "lucide-react";
import Homepage from '@/components/homepage/homepage'; // Importar Homepage

export default function Home() {
  // Estado para controlar a autenticação do admin
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Função para lidar com o login do admin
  const handleAdminLogin = () => {
    const password = prompt("Digite a senha de administrador:");
    if (password === "2210") {
      setIsAdminAuthenticated(true);
    } else if (password !== null) { // Evita alerta se o usuário cancelar o prompt
      alert("Senha incorreta!");
    }
  };

  // Renderiza a Homepage se o admin estiver autenticado
  if (isAdminAuthenticated) {
    return <Homepage />; 
  }

  // Renderiza a tela "Em breve" por padrão ou se a autenticação falhar
  return (
    <main className="min-h-screen bg-brand-green flex flex-col items-center justify-center text-white p-6">
      {/* Contenido Centralizado */}
      <div className="flex flex-col items-center text-center space-y-8 animate-fadeIn">
        {/* Logo Principal */}
        <Image 
          src="/images/logo_alessandra.png" 
          alt="Logo Alessandra Fernandes"
          width={200} // Ajustar tamanho conforme necessrio
          height={100} // Ajustar tamanho conforme necessrio
          priority // Prioriza o carregamento da logo
          className="mb-4" // Adiciona margem inferior
        />

        {/* Texto Abaixo da Logo */}
        <p className="text-xl md:text-2xl text-white">
          Em breve um novo site
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          {/* Botão Agendar Consulta */}
          <Link 
            href="https://wa.me/5511963074495?text=Oi!%20gostaria%20de%20agendar%20uma%20consulta..." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-white/90 transition-colors duration-300"
          >
            Agendar Consulta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          {/* Botão Modo Admin */}
          <button
            onClick={handleAdminLogin}
            className="inline-flex items-center justify-center px-6 py-3 border border-white/50 text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 transition-colors duration-300"
          >
            Modo Admin
            <UserCog className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </main>
  );
}
