import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Ferramentas() {
  return (
    <main>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">Ferramentas Nutricionais</h1>
            <p className="text-lg mb-0">
              Recursos e ferramentas que utilizo para auxiliar no seu processo de transformação nutricional
              e alcance dos seus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Ferramentas principais */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center font-montserrat">Avaliação Personalizada</h2>
            <p className="text-lg mb-8">
              Para criar um plano nutricional eficiente e adaptado às suas necessidades, utilizo diversas 
              ferramentas de avaliação e acompanhamento. Combinadas, elas permitem uma visão completa da sua
              condição atual e dos resultados obtidos ao longo do processo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-montserrat">Avaliação Antropométrica</h3>
              <p className="mb-4">
                Medição precisa de diversos parâmetros corporais que permitem avaliar sua composição corporal 
                e acompanhar sua evolução:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Peso e estatura</li>
                <li>Circunferências corporais</li>
                <li>Dobras cutâneas</li>
                <li>Bioimpedância</li>
                <li>Relação cintura-quadril</li>
              </ul>
              <div className="h-64 relative rounded-md overflow-hidden">
                <Image 
                  src="/images/mao segurando fita metrica.jpg" 
                  alt="Avaliação Antropométrica" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="bg-primary p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 font-montserrat">Análise Alimentar</h3>
              <p className="mb-4">
                Avaliação detalhada dos seus hábitos alimentares atuais para identificar pontos de melhoria 
                e criar estratégias personalizadas:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Recordatório alimentar 24h</li>
                <li>Registro alimentar de 3 a 7 dias</li>
                <li>Questionário de frequência alimentar</li>
                <li>Identificação de preferências e aversões</li>
                <li>Análise de horários e rotina alimentar</li>
              </ul>
              <div className="h-64 relative rounded-md overflow-hidden">
                <Image 
                  src="/images/i-yunmai-5jctAMjz21A-unsplash.jpg" 
                  alt="Análise Alimentar" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software e Apps */}
      <section className="py-16 bg-primary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">Tecnologia a Favor da sua Nutrição</h2>
          
          <div className="bg-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 font-montserrat">Software e Aplicativos</h3>
            <p className="mb-6">
              Utilizo ferramentas tecnológicas para monitorar sua alimentação e progresso, facilitando 
              o acompanhamento mesmo à distância:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 p-4 rounded-md">
                <h4 className="font-bold mb-2">Software de Avaliação Nutricional</h4>
                <p className="text-sm">
                  Programas especializados que permitem calcular com precisão suas necessidades 
                  nutricionais e criar planos alimentares personalizados.
                </p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-md">
                <h4 className="font-bold mb-2">App de Monitoramento</h4>
                <p className="text-sm">
                  Aplicativos para acompanhamento diário da alimentação, permitindo ajustes
                  rápidos e comunicação direta para dúvidas e orientações.
                </p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-md">
                <h4 className="font-bold mb-2">Calculadoras de Composição Corporal</h4>
                <p className="text-sm">
                  Ferramentas para análise precisa da sua composição corporal e estabelecimento 
                  de metas realistas e saudáveis.
                </p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-md">
                <h4 className="font-bold mb-2">Banco de Dados de Alimentos</h4>
                <p className="text-sm">
                  Acesso a informações nutricionais detalhadas de milhares de alimentos para 
                  criação de cardápios variados e balanceados.
                </p>
              </div>
            </div>
            
            <p>
              Essas ferramentas complementam o atendimento presencial, proporcionando um 
              acompanhamento contínuo e eficiente do seu progresso.
            </p>
          </div>
        </div>
      </section>

      {/* Recursos Educativos */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">Recursos Educativos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t-4 border-accent pt-4">
              <h3 className="text-xl font-bold mb-3 font-montserrat">Material Informativo</h3>
              <p className="mb-4">
                Guias, e-books e materiais educativos sobre temas relevantes de nutrição, 
                adequados ao seu perfil e objetivos.
              </p>
            </div>
            
            <div className="border-t-4 border-accent pt-4">
              <h3 className="text-xl font-bold mb-3 font-montserrat">Cardápios Modelo</h3>
              <p className="mb-4">
                Exemplos de cardápios adaptados às suas necessidades, com alternativas 
                e sugestões para diferentes situações.
              </p>
            </div>
            
            <div className="border-t-4 border-accent pt-4">
              <h3 className="text-xl font-bold mb-3 font-montserrat">Orientações Práticas</h3>
              <p className="mb-4">
                Dicas para preparação de alimentos, compras, organização da rotina alimentar 
                e alimentação em situações especiais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Transforme sua alimentação com acompanhamento especializado</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Tenha acesso a todas essas ferramentas e recursos para potencializar seus resultados nutricionais.
          </p>
          <Link 
            href="/contato" 
            className="btn btn-secondary"
          >
            Agende sua Consulta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
} 