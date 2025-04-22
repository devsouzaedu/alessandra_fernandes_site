'use client'; // Adiciona diretiva para Componente de Cliente

import { useState } from 'react'; // Importa useState
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserCog } from "lucide-react";
// import Homepage from '@/components/homepage/homepage'; // Descomentar quando Homepage for criado

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
  // if (isAdminAuthenticated) {
  //   return <Homepage />; // Descomentar quando Homepage for criado
  // }

  // Renderiza a tela "Em breve" por padrão ou se a autenticação falhar
  return (
    // Atualiza cor de fundo para usar brand-green
    <main className="min-h-screen bg-brand-green flex flex-col items-center justify-center text-white p-6">
      {/* Remover elementos decorativos */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.03),_transparent_30%)]"></div> */}
      {/* <div className="absolute top-1/4 left-12 w-24 h-24 border-t border-l border-white/10 opacity-50"></div> */}
      {/* <div className="absolute bottom-1/4 right-12 w-24 h-24 border-b border-r border-white/10 opacity-50"></div> */}
      {/* <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-[#D4AF37]/40 opacity-60 rotate-45"></div> */}
      
      {/* Conteúdo Centralizado */}
      <div className="flex flex-col items-center text-center space-y-8 animate-fadeIn">
        {/* Logo Principal */}
        <Image 
          src="/images/logo_alessandra.png" 
          alt="Logo Alessandra Fernandes"
          width={200} // Ajustar tamanho conforme necessário
          height={100} // Ajustar tamanho conforme necessário
          priority // Prioriza o carregamento da logo
          className="mb-4" // Adiciona margem inferior
        />
        {/* Remover o placeholder visual */}
        {/* <div className="w-48 h-24 bg-white/10 rounded flex items-center justify-center mb-4"> 
            <span className="text-sm text-white/50">Logo Placeholder</span>
        </div> */}

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
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-green bg-white hover:bg-white/90 transition-colors duration-300"
          >
            Agendar Consulta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          {/* Botão Modo Admin agora usa onClick */}
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
