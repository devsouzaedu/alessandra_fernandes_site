import { Heart, Weight, Apple, Dumbbell, FileSpreadsheet } from 'lucide-react';

interface EspecialidadeProps {
  icon: React.ReactNode;
  title: string;
  delay: string;
}

const EspecialidadeCard = ({ icon, title, delay }: EspecialidadeProps) => (
  <div
    className={`p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-slideUp ${delay} bg-white flex flex-col justify-between h-full group`}
  >
    <div className="flex flex-col items-center text-center w-full">
      <div className="mb-5 transform transition-transform duration-500 group-hover:scale-110 text-brand-green group-hover:text-[#5b7566]">
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-semibold text-black px-3 py-1 rounded-md text-center w-full relative overflow-hidden">
        <span className="relative z-10 transition-colors duration-500 group-hover:text-brand-green">{title}</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green transition-all duration-500 group-hover:w-full"></span>
      </h3>
    </div>
  </div>
);

export default function Especialidades() {
  const especialidades = [
    { 
      icon: <Heart size={48} className="text-black" />, 
      title: "Nutrição Estética", 
      delay: "delay-100",
      alt: false
    },
    { 
      icon: <Weight size={48} className="text-black" />, 
      title: "Emagrecimento", 
      delay: "delay-200",
      alt: true 
    },
    { 
      icon: <Apple size={48} className="text-black" />, 
      title: "Nutrição Clínica", 
      delay: "delay-300",
      alt: false
    },
    { 
      icon: <Dumbbell size={48} className="text-black" />, 
      title: "Nutrição Aplicada ao Exercício", 
      delay: "delay-400",
      alt: true
    },
    { 
      icon: <FileSpreadsheet size={48} className="text-black" />, 
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