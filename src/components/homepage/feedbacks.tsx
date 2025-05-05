import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Feedbacks() {
  // Estado para controlar qual imagem de feedback está visível
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Array com os caminhos das imagens de feedback
  const feedbackImages = [
    '/images/feedbacks_dra_alessandra_google (1).png',
    '/images/feedbacks_dra_alessandra_google (2).png',
    '/images/feedbacks_dra_alessandra_google (3).png',
    '/images/feedbacks_dra_alessandra_google (4).png',
  ];
  
  // Troca automática a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === feedbackImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [feedbackImages.length]);
  
  // Função para detectar o arrastar para os lados (swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    // Detecta se o swipe foi para a esquerda ou direita
    const swipeDistance = touchEndX.current - touchStartX.current;
    
    // Se a distância for significativa (mais de 50px)
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        // Swipe para a direita - slide anterior
        setCurrentIndex(prevIndex => 
          prevIndex === 0 ? feedbackImages.length - 1 : prevIndex - 1
        );
      } else {
        // Swipe para a esquerda - próximo slide
        setCurrentIndex(prevIndex => 
          prevIndex === feedbackImages.length - 1 ? 0 : prevIndex + 1
        );
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Dizem Nossos Pacientes</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Depoimentos de quem já transformou sua saúde e qualidade de vida
          </p>
        </div>
        
        {/* Carrossel de imagens de feedback - minimalista */}
        <div className="max-w-2xl mx-auto overflow-hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex transition-all duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {feedbackImages.map((src, index) => (
              <div key={index} className="min-w-full">
                <div className="relative h-[500px] w-full">
                  <Image
                    src={src}
                    alt={`Feedback de cliente no Google ${index + 1}`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicadores de página minimalistas */}
          <div className="flex justify-center gap-1.5 mt-4">
            {feedbackImages.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-opacity duration-300 ${
                  currentIndex === index ? 'bg-green-primary opacity-100' : 'bg-gray-300 opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}