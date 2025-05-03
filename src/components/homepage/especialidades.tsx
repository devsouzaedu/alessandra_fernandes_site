import { Heart, Weight, Apple, Dumbbell, FileSpreadsheet } from 'lucide-react';

interface EspecialidadeProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
}

const EspecialidadeCard = ({ icon, title, delay }: EspecialidadeProps) => (
  <div
    className={`p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl animate-slideUp ${delay} bg-white`}
  >
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-sm font-medium text-[#729080] px-3 py-1 rounded-sm">{title}</h3>
    </div>
  </div>
);

export default function Especialidades() {
  const especialidades = [
    { 
      icon: <Heart size={48} className="text-[#729080]" />, 
      title: "Nutrição Estética", 
      delay: "delay-100",
      alt: false
    },
    { 
      icon: <Weight size={48} className="text-[#729080]" />, 
      title: "Emagrecimento", 
      delay: "delay-200",
      alt: true 
    },
    { 
      icon: <Apple size={48} className="text-[#729080]" />, 
      title: "Nutrição Clínica", 
      delay: "delay-300",
      alt: false
    },
    { 
      icon: <Dumbbell size={48} className="text-[#729080]" />, 
      title: "Nutrição Aplicada ao Exercício", 
      delay: "delay-400",
      alt: true
    },
    { 
      icon: <FileSpreadsheet size={48} className="text-[#729080]" />, 
      title: "Planejamento de Cardápio", 
      delay: "delay-500",
      alt: false
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#729080' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Especialidades</h2>
          <p className="text-white max-w-3xl mx-auto">
            Atendimento especializado para suas necessidades nutricionais
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {especialidades.map((item, idx) => (
            <EspecialidadeCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
} 