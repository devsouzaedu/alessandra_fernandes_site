import { MapPin, Clock, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Contato() {
  const WHATSAPP_LINK = "https://wa.me/5511963074495?text=Oi!%20gostaria%20de%20agendar%20uma%20consulta...";
  
  return (
    <section className="py-24 bg-brand-green" id="contato">
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
                    Barueri, SP<br />
                    <Link 
                      href="https://g.co/kgs/Qek28eB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-main hover:underline mt-2 inline-block"
                    >
                      Ver no Google Maps
                    </Link>
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
                className="inline-block w-full py-4 px-6 text-white text-center font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, var(--brand-accent), var(--brand-accent-light))' }}
              >
                Agendar Consulta
              </Link>
            </div>
          </div>
          
          {/* Mapa */}
          <div className="h-96 rounded-lg overflow-hidden shadow-md animate-slideUp delay-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1758128087093!2d-46.86438542385761!3d-23.52903376258215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf026c105a6675%3A0x648842201d599535!2sAv.%20Trindade%2C%20254%20-%20Alphaville%20Industrial%2C%20Barueri%20-%20SP%2C%2006473-005!5e0!3m2!1spt-BR!2sbr!4v1712786989868!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório da Dra. Alessandra Fernandes"
              aria-label="Mapa mostrando a localização do consultório"
            ></iframe>
            
            {/* Overlay para o pin vermelho no centro do mapa */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-center">
              <div className="flex flex-col items-center" style={{transform: 'translateY(-20px)'}}>
                <MapPin size={42} className="text-red-600 drop-shadow-xl" style={{filter: 'drop-shadow(0px 0px 5px rgba(255,255,255,0.7))'}} />
                <div className="h-2 w-2 rounded-full bg-red-600 animate-ping mt-[-8px] opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 