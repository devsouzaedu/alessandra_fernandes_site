import { Mail, MapPin, Instagram, Linkedin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Contato() {
  return (
    <main style={{ backgroundColor: '#729080' }}>
      {/* Header */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-white">Contato</h1>
            <p className="text-lg mb-6 text-white">
              Entre em contato para agendar sua consulta ou tirar dúvidas
            </p>
          </div>
        </div>
      </section>

      {/* Cards de Contato */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card de Endereço */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <MapPin className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Endereço</h3>
                  <p className="text-gray-600 mb-1">
                    Avenida Trindade, 254<br />
                    Prédio Office Bethaville<br />
                    Barueri, SP
                  </p>
                  <a href="https://maps.google.com/?q=Avenida+Trindade,+254,+Barueri" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2">
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
            
            {/* Card de Horário de Atendimento */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Clock className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sábado<br />
                    9h às 18h
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card de WhatsApp */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">WhatsApp</h3>
                  <p className="text-gray-600">
                    (11) 96307-4495
                  </p>
                </div>
              </div>
            </div>
            
            {/* Botão Agendar Consulta */}
            <Link href="https://wa.me/5511963074495?text=Oi!%20gostaria%20de%20agendar%20uma%20consulta..." className="bg-[#729080] text-white p-6 rounded-md shadow-md flex items-center justify-center hover:opacity-90 transition-opacity">
              <span className="font-medium">Agendar Consulta</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-md shadow-md overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1758128087093!2d-46.86438542385761!3d-23.52903376258215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf026c105a6675%3A0x648842201d599535!2sAv.%20Trindade%2C%20254%20-%20Alphaville%20Industrial%2C%20Barueri%20-%20SP%2C%2006473-005!5e0!3m2!1spt-BR!2sbr!4v1712786989868!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="400" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
          
          <div className="mt-3 text-center text-white text-xs">
            <p>2023 Google - Dados do mapa 2023 Google</p>
            <p className="mt-1">Informe erro no mapa</p>
          </div>
        </div>
      </section>
    </main>
  );
} 