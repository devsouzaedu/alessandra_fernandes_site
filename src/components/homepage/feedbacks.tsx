import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Feedbacks() {
  // Estado para controlar qual imagem de feedback está visível
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array com os caminhos das imagens de feedback
  const feedbackImages = [
    '/images/feedbacks_dra_alessandra_google (1).png',
    '/images/feedbacks_dra_alessandra_google (2).png',
    '/images/feedbacks_dra_alessandra_google (3).png',
    '/images/feedbacks_dra_alessandra_google (4).png',
  ];

  // Funções para navegar entre as imagens
  const prevFeedback = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? feedbackImages.length - 1 : prevIndex - 1
    );
  };

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === feedbackImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Dizem Nossos Pacientes</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Depoimentos de quem já transformou sua saúde e qualidade de vida
          </p>
        </div>
        
        {/* Carrossel de imagens de feedback */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-xl shadow-lg overflow-hidden animate-fadeIn">
            {/* Imagem atual do feedback */}
            <div className="relative h-[500px] w-full">
              <Image 
                src={feedbackImages[currentIndex]}
                alt={`Feedback de cliente no Google ${currentIndex + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-xl"
              />
            </div>
            
            {/* Botões de navegação */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
              <button 
                onClick={prevFeedback} 
                className="p-2 rounded-full bg-white/80 text-green-primary hover:bg-green-primary hover:text-white transition-colors"
                aria-label="Feedback anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextFeedback} 
                className="p-2 rounded-full bg-white/80 text-green-primary hover:bg-green-primary hover:text-white transition-colors"
                aria-label="Próximo feedback"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Indicadores de paginação */}
          <div className="flex justify-center gap-2 mt-6">
            {feedbackImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-green-primary' : 'bg-gray-300'
                }`}
                aria-label={`Ver feedback ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}