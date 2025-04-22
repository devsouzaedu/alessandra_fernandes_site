import { Heart, Weight, Apple, Dumbbell, FileSpreadsheet } from 'lucide-react';

interface EspecialidadeProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
  alt?: boolean;
}

const EspecialidadeCard = ({ icon, title, delay, alt = false }: EspecialidadeProps) => (
  <div className={`${alt ? 'bg-brand-green-alt' : 'bg-brand-green'} p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 animate-slideUp ${delay}`}>
    <div className="flex flex-col items-center text-center">
      <div className="text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    </div>
  </div>
);

export default function Especialidades() {
  const especialidades = [
    { 
      icon: <Heart size={48} />, 
      title: "Nutrição Estética", 
      delay: "delay-100",
      alt: false
    },
    { 
      icon: <Weight size={48} />, 
      title: "Emagrecimento", 
      delay: "delay-200",
      alt: true 
    },
    { 
      icon: <Apple size={48} />, 
      title: "Nutrição Clínica", 
      delay: "delay-300",
      alt: false
    },
    { 
      icon: <Dumbbell size={48} />, 
      title: "Nutrição Aplicada ao Exercício", 
      delay: "delay-400",
      alt: true
    },
    { 
      icon: <FileSpreadsheet size={48} />, 
      title: "Planejamento de Cardápio", 
      delay: "delay-500",
      alt: false
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">Especialidades</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Atendimento especializado para suas necessidades nutricionais
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {especialidades.map((esp, index) => (
            <EspecialidadeCard 
              key={index}
              icon={esp.icon}
              title={esp.title}
              delay={esp.delay}
              alt={esp.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 