import Image from 'next/image';
import { MapPin, Video } from 'lucide-react';

export default function ComoFuncionaConsultas() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">Consultas</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Como funciona?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp delay-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6 text-brand-green flex items-center gap-2 text-lg font-semibold">
                <MapPin size={24} />
                <span>Atendimento Presencial</span>
              </div>
              <p className="text-gray-600 mb-4">
                A Dra. Alessandra atende pessoalmente no endereço:
              </p>
              <address className="text-gray-700 mb-6 not-italic">
                Avenida Trindade, 254<br />
                Prédio Office Bethaville<br />
                Barueri, SP
              </address>
              
              <div className="relative w-full h-64 rounded-md overflow-hidden">
                <Image
                  src="/images/consultorio_alessandra.jpg"
                  alt="Consultório da Dra. Alessandra Fernandes"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div className="animate-slideUp delay-200">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6 text-brand-green flex items-center gap-2 text-lg font-semibold">
                <Video size={24} />
                <span>Teleconsulta</span>
              </div>
              <p className="text-gray-600 mb-6">
                Também está disponível o atendimento por teleconsulta via video-chamada, com a mesma 
                qualidade e atenção do atendimento presencial.
              </p>
              
              <div className="relative w-full h-64 rounded-md overflow-hidden">
                <Image
                  src="/images/dra_alessandra.jpg"
                  alt="Dra. Alessandra Fernandes"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 