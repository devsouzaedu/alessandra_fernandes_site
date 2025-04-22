// src/components/homepage/hero-section.tsx
import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_LINK = "https://wa.me/5511963074495?text=Oi!%20gostaria%20de%20agendar%20uma%20consulta...";
const HERO_IMAGE_PATH = "/images/fotos_alessandra_nutricionista_esportiva_em_barueri_alphaville_bethaville_ (2).jpeg";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 pt-16"> {/* pt-16 para compensar a altura do Navbar fixo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de Texto */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green mb-4">
              Dra. Alessandra Fernandes
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Nutricionista Clínica, especialista em Nutrição Esportiva.
            </p>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-brand-green rounded-md shadow-md hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
            >
              Agendar Consulta via WhatsApp
            </Link>
          </div>

          {/* Imagem */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={HERO_IMAGE_PATH}
                alt="Dra. Alessandra Fernandes"
                fill
                style={{ objectFit: 'cover' }}
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