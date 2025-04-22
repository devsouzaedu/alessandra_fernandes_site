// src/components/homepage/hero-section.tsx
import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_LINK = "https://wa.me/5511963074495?text=Oi!%20gostaria%20de%20agendar%20uma%20consulta...";
const HERO_IMAGE_PATH = "/images/fotos_alessandra_nutricionista_esportiva_em_barueri_alphaville_bethaville_ (2).jpeg";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 pt-20"> {/* pt-20 para compensar a altura do Navbar fixo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de Texto */}
          <div 
            className="text-center md:text-left font-lexend"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green mb-4 font-montserrat"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Dra. Alessandra Fernandes
            </h1>
            <p 
              className="text-lg md:text-xl text-gray-600 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Nutricionista Clínica, especialista em Nutrição Esportiva.
            </p>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-brand-green rounded-full shadow-md hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Agendar Consulta
            </Link>
          </div>

          {/* Imagem */}
          <div 
            className="flex justify-center" 
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative w-full max-w-md h-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src={HERO_IMAGE_PATH}
                alt="Dra. Alessandra Fernandes"
                width={500}
                height={700}
                className="w-full h-auto"
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