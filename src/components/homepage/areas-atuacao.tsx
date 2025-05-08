import { Video, UserRound, Dumbbell, Brain, Salad, 
  Award, Clipboard, Timer, HeartPulse, Clock, Baby,
  Flower2, Sparkles, Egg, Activity, Stethoscope, Smile, Scissors, 
  Scale } from 'lucide-react';
import { useState } from 'react';

interface ServicoProps {
  icon: React.ReactNode;
  title: string;
}

const ServicoCard = ({ icon, title }: ServicoProps) => (
  <div className="p-5 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md flex items-center gap-4 animate-fadeIn hover:bg-brand-main">
    <div className="text-black">
      {icon}
    </div>
    <h3 className="font-normal text-black">{title}</h3>
  </div>
);

export default function AreasAtuacao() {
  // Estado para controlar paginação em telas menores
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const servicos = [
    { icon: <Video size={24} />, title: "Teleconsulta" },
    { icon: <UserRound size={24} />, title: "Primeira consulta Nutrição" },
    { icon: <Clock size={24} />, title: "Acompanhamento nutricional de mulheres na menopausa" },
    { icon: <Dumbbell size={24} />, title: "Nutrição esportiva" },
    { icon: <Brain size={24} />, title: "Tratamento para compulsão alimentar" },
    { icon: <Brain size={24} />, title: "Tratamento de transtornos alimentares" },
    { icon: <Award size={24} />, title: "Suporte Nutricional para Atletas" },
    { icon: <Clipboard size={24} />, title: "Planejamento de cardápio nutricional" },
    { icon: <Timer size={24} />, title: "Performance física" },
    { icon: <HeartPulse size={24} />, title: "Nutrição para microbiota intestinal" },
    { icon: <Timer size={24} />, title: "Nutrição para esportes de Endurance" },
    { icon: <Baby size={24} />, title: "Nutrição na Saúde da Mulher" },
    { icon: <Flower2 size={24} />, title: "Nutrição na menopausa e climatério" },
    { icon: <Sparkles size={24} />, title: "Nutrição estética" },
    { icon: <Egg size={24} />, title: "Nutrição e Fertilidade" },
    { icon: <Activity size={24} />, title: "Acompanhamento nutricional na hipertensão" },
    { icon: <Stethoscope size={24} />, title: "Nutrição e covid-19" },
    { icon: <Smile size={24} />, title: "Nutrição comportamental" },
    { icon: <Scissors size={24} />, title: "Nutrição bariátrica" },
    { icon: <Scale size={24} />, title: "Emagrecimento saudável" },
    { icon: <Scale size={24} />, title: "Emagrecimento definitivo" },
    { icon: <HeartPulse size={24} />, title: "Controle do colesterol" },
    { icon: <Salad size={24} />, title: "Consulta nutricionista" },
    { icon: <Dumbbell size={24} />, title: "Consulta hipertrofia e definição muscular" },
    { icon: <Sparkles size={24} />, title: "Acompanhamento nutricional nos tratamentos estéticos" },
    { icon: <Scissors size={24} />, title: "Acompanhamento nutricional no pré e pós-operatório da cirurgia bariátrica" },
    { icon: <Scissors size={24} />, title: "Acompanhamento nutricional no pré e pós-cirúrgico" },
    { icon: <Activity size={24} />, title: "Acompanhamento nutricional no Diabetes" },
    { icon: <Scale size={24} />, title: "Tratamento para emagrecimento" },
  ];

  // Calcular o total de páginas
  const totalPages = Math.ceil(servicos.length / itemsPerPage);

  // Obter os serviços para a página atual
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  const paginatedServicos = servicos.slice(startIndex, endIndex);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Áreas de Atuação e Serviços</h2>
          <p className="text-brand-secondary600 max-w-3xl mx-auto hover:text-brand-secondary font-normal">
            Conheça os serviços especializados oferecidos para o seu bem-estar e saúde
          </p>
        </div>
        
        {/* Grid para desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {servicos.map((servico, index) => (
            <ServicoCard key={index} {...servico} />
          ))}
        </div>

        {/* Grid com paginação para mobile */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-4 mb-8">
            {paginatedServicos.map((servico, index) => (
              <ServicoCard 
                key={index}
                icon={servico.icon}
                title={servico.title}
              />
            ))}
          </div>
          
          {/* Controles de paginação */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentPage === index ? 'bg-brand-main' : 'bg-gray-300'
                }`}
                aria-label={`Página ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 