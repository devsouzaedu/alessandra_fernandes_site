import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

// Interface para dados de depoimentos
interface Depoimento {
  id: number;
  nome: string;
  foto: string;
  texto: string;
  avaliacao: number;
}

export default function Feedbacks() {
  // Estado para controlar qual depoimento está visível
  const [currentIndex, setCurrentIndex] = useState(0);

  // Depoimentos placeholder
  const depoimentos: Depoimento[] = [
    {
      id: 1,
      nome: "Cliente Satisfeito",
      foto: "/images/garotas_feedback_pfp (1).jpg",
      texto: "Este é um placeholder para um depoimento real. Aqui será adicionado o feedback de um cliente satisfeito com os serviços da Dra. Alessandra Fernandes.",
      avaliacao: 5
    },
    {
      id: 2,
      nome: "Cliente Motivado",
      foto: "/images/garotas_feedback_pfp (2).jpg",
      texto: "Outro placeholder para depoimento. Os depoimentos reais dos clientes serão adicionados posteriormente nesta seção, mostrando os resultados obtidos.",
      avaliacao: 5
    },
    {
      id: 3,
      nome: "Cliente Transformado",
      foto: "/images/garotas_feedback_pfp (3).jpg",
      texto: "Terceiro placeholder para depoimento. Esta área será preenchida com histórias reais de transformação e resultados alcançados com a nutrição.",
      avaliacao: 5
    }
  ];

  // Funções para navegar entre os depoimentos
  const prevDepoimento = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? depoimentos.length - 1 : prevIndex - 1
    );
  };

  const nextDepoimento = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === depoimentos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">O Que Dizem Nossos Pacientes</h2>
          <p className="text-black/80 max-w-3xl mx-auto">
            Depoimentos de quem já transformou sua saúde e qualidade de vida
          </p>
        </div>
        
        {/* Carrossel de depoimentos */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-brand-main p-6 md:p-8 rounded-xl shadow-sm animate-fadeIn">
            {/* Aspas decorativas */}
            <div className="absolute top-4 left-4 text-6xl text-brandSecondary font-serif">&ldquo;</div>
            
            {/* Conteúdo do depoimento */}
            <div className="relative z-10 pt-6">
              <p className="text-white text-lg italic mb-6">
                {depoimentos[currentIndex].texto}
              </p>
              
              {/* Informações do cliente */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image 
                      src={depoimentos[currentIndex].foto}
                      alt={`Foto de ${depoimentos[currentIndex].nome}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{depoimentos[currentIndex].nome}</div>
                    <div className="flex">
                      {Array.from({ length: depoimentos[currentIndex].avaliacao }).map((_, i) => (
                        <Star key={i} size={16} className="fill-current text-brandSecondary" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Navegação do carrossel */}
                <div className="flex gap-2">
                  <button 
                    onClick={prevDepoimento} 
                    className="p-2 rounded-full bg-brand-main border border-brandSecondary text-brandSecondary hover:bg-brandSecondary hover:text-brand-main transition-colors"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft size={20} className="text-brandSecondary hover:text-brand-main" />
                  </button>
                  <button 
                    onClick={nextDepoimento} 
                    className="p-2 rounded-full bg-brand-main border border-brandSecondary text-brandSecondary hover:bg-brandSecondary hover:text-brand-main transition-colors"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight size={20} className="text-brandSecondary hover:text-brand-main" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Aspas decorativas de fechamento */}
            <div className="absolute bottom-4 right-4 text-6xl text-brandSecondary font-serif rotate-180">&rdquo;</div>
          </div>
          
          {/* Indicadores de paginação */}
          <div className="flex justify-center gap-2 mt-6">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-brand-main'}`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 