import { MapPin, Clock, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Contato() {
  const WHATSAPP_LINK = "https://wa.me/5511963074495?text=Oi!%20gostaria%20de%20agendar%20uma%20consulta...";
  
  return (
    <section className="py-16 bg-brand-green" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contato</h2>
          <p className="text-white/90 max-w-3xl mx-auto">
            Entre em contato para agendar sua consulta ou tirar dúvidas
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Informações de contato */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-slideUp delay-100">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-brand-green mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Endereço</h3>
                  <address className="not-italic text-gray-600">
                    Avenida Trindade, 254<br />
                    Prédio Office Bethaville<br />
                    Barueri, SP
                  </address>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-brand-green mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sábado<br />
                    9h às 18h
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-brand-green mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <Link 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-green hover:underline"
                  >
                    (11) 96307-4495
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Botão de agendamento */}
            <div className="mt-8">
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3 px-6 bg-brand-green text-white text-center font-medium rounded-md hover:bg-primary-dark transition-colors duration-300"
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
          
          {/* Mapa */}
          <div className="h-96 rounded-lg overflow-hidden shadow-md animate-slideUp delay-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7598854805367!2d-46.86918302391035!3d-23.507650559834967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03dd5607441b%3A0xd7e96ccebfcafc4e!2sAv.%20Trindade%2C%20254%20-%20Bethavile%2C%20Barueri%20-%20SP%2C%2006404-326!5e0!3m2!1spt-BR!2sbr!4v1688563309967!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório da Dra. Alessandra Fernandes"
              aria-label="Mapa mostrando a localização do consultório"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
} 