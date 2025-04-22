import { HeartHandshake } from 'lucide-react';

export default function FraseHumanizada() {
  return (
    <section className="py-16 bg-brand-green text-white relative overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <HeartHandshake size={64} className="mx-auto mb-6 opacity-90" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cuidando de você com dedicação e empatia
          </h2>
          
          <p className="text-xl md:text-2xl font-montserrat leading-relaxed mb-8">
            "Meu compromisso é com o seu bem-estar. Cada consulta é uma oportunidade de transformar 
            sua relação com a alimentação e construir hábitos saudáveis que durarão por toda a vida."
          </p>
          
          <div className="text-lg font-semibold">
            Dra. Alessandra Fernandes
          </div>
          <div className="text-white/70">
            Nutricionista Clínica e Esportiva
          </div>
        </div>
      </div>
    </section>
  );
} 