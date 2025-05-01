// src/components/homepage/hero-section.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import { Apple, Salad, Carrot, Beef, Drumstick, EggFried } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5511963074495?text=Oi!%20gostaria%20de%20agendar%20uma%20consulta...";
const HERO_IMAGE_PATH = "/images/fotos_alessandra_nutricionista_esportiva_em_barueri_alphaville_bethaville_ (2).jpeg";

export default function HeroSection() {
  // Inicializar AOS com configurações personalizadas para o hero
  useEffect(() => {
    // Garantir que as animações sejam atualizadas
    AOS.refresh();
  }, []);

  return (
    <section className="bg-gray-50 pt-20"> {/* pt-20 para compensar a altura do Navbar fixo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de Texto */}
          <div 
            className="text-center md:text-left font-lexend overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="100"
            data-aos-offset="0"
            data-aos-distance="100px"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green mb-4 font-montserrat"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="200"
              data-aos-distance="100px"
            >
              Dra. Alessandra Fernandes
            </h1>
            <p 
              className="text-lg md:text-xl text-gray-600 mb-8"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="300"
              data-aos-distance="100px"
            >
              Nutricionista Clínica, especialista em Nutrição Esportiva.
            </p>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-lg font-semibold text-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-brand-main focus:ring-offset-2"
              style={{ backgroundColor: '#729080' }}
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="400"
              data-aos-distance="100px"
            >
              Agendar Consulta
            </Link>
            
            {/* Ícones de nutrição com animação de banner rotativo */}
            <div className="mt-8 relative w-full max-w-md h-20 overflow-hidden">
              <div className="absolute inset-0 flex space-x-10 items-center" style={{ animation: 'carouselRotate 20s linear infinite' }}>
                {[
                  { icon: <Apple size={48} />, position: 0 },
                  { icon: <Salad size={48} />, position: 1 },
                  { icon: <Carrot size={48} />, position: 2 },
                  { icon: <Beef size={48} />, position: 3 },
                  { icon: <Drumstick size={48} />, position: 4 },
                  { icon: <EggFried size={48} />, position: 5 },
                  // Repetindo os ícones para criar efeito contínuo
                  { icon: <Apple size={48} />, position: 6 },
                  { icon: <Salad size={48} />, position: 7 },
                  { icon: <Carrot size={48} />, position: 8 },
                  { icon: <Beef size={48} />, position: 9 },
                  { icon: <Drumstick size={48} />, position: 10 },
                  { icon: <EggFried size={48} />, position: 11 },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="text-brand-green transform transition-all duration-500 hover:scale-125"
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div 
            className="flex justify-center overflow-hidden" 
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="200"
            data-aos-distance="100px"
          >
            <div className="relative w-full max-w-md h-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src={HERO_IMAGE_PATH}
                alt="Dra. Alessandra Fernandes"
                width={500}
                height={700}
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
                style={{ 
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 