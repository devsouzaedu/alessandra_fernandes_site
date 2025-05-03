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
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      {/* Elementos decorativos modernos */}
      <div className="absolute top-0 left-0 w-full h-32 bg-green-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-green-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-primary rounded-bl-full opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-primary rounded-tr-full opacity-20"></div>
      
      {/* Conteúdo Centralizado */}
      <div className="flex flex-col items-center text-center space-y-8 animate-fadeIn relative z-10 bg-white px-8 py-12 rounded-xl shadow-sm border border-gray-100 max-w-md w-full">
        {/* Logo Principal */}
        <Image 
          src="/images/logo_alessandra.png" 
          alt="Logo Alessandra Fernandes"
          width={200} 
          height={100} 
          priority 
          className="mb-2" 
        />

        {/* Divider */}
        <div className="w-24 h-1 bg-green-primary"></div>

        {/* Texto Abaixo da Logo */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-montserrat">
            Bem-vindo!
          </h1>
          <p className="text-lg text-gray-700">
            Em breve um novo site com conteúdo sobre saúde, nutrição e bem-estar.
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
          {/* Botão Agendar Consulta */}
          <Link 
            href="https://wa.me/5511963074495?text=Oi!%20gostaria%20de%20agendar%20uma%20consulta..." 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-green-primary hover:bg-green-secondary transition-colors duration-300 shadow-sm"
          >
            Agendar Consulta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          {/* Link para o Blog */}
          <Link 
            href="/blog" 
            className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-green-primary bg-green-50 hover:bg-green-100 transition-colors duration-300 border border-green-100"
          >
            Visitar Blog
          </Link>
        </div>
        
        {/* Botão Modo Admin - menor e menos proeminente */}
        <button
          onClick={handleAdminLogin}
          className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
        >
          Modo Admin
          <UserCog className="ml-2 h-4 w-4" />
        </button>
      </div>
      
      {/* Rodapé com informações de contato */}
      <div className="absolute bottom-4 text-center text-gray-500 text-sm font-light z-10">
        <p>Alessandra Fernandes • Nutricionista • CRN 123456</p>
        <p className="mt-1">contato@alessandrafernandes.com.br</p>
      </div>
    </main>
  );
}
