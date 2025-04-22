import Image from 'next/image';
import { GraduationCap, Award, Users, CalendarClock } from 'lucide-react';

export default function SobreMim() {
  return (
    <section className="py-12 md:py-16 bg-brand-green" id="sobre">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Quem Eu Sou</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Foto da Doutora */}
          <div className="mx-auto md:mx-0 animate-slideUp delay-100">
            <div className="relative w-full max-w-md h-64 sm:h-80 md:h-[550px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/alessandra_foto_pfp.jpg"
                alt="Dra. Alessandra Fernandes"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Informações biográficas */}
          <div className="animate-slideUp delay-200 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <GraduationCap size={24} className="text-brand-green flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Formação</h3>
                <p className="text-gray-600">Universidade Presbiteriana Mackenzie (2016)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <Award size={24} className="text-brand-green flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Especialização</h3>
                <p className="text-gray-600">Pós-graduada em Nutrição Esportiva pelo Centro de Estudos de Fisiologia do Exercício</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <Users size={24} className="text-brand-green flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Experiência</h3>
                <p className="text-gray-600">Membro da comissão técnica de judô da Força Aérea Brasileira</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <CalendarClock size={24} className="text-brand-green flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Atuação</h3>
                <p className="text-gray-600">7 anos de experiência em consultório</p>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 text-gray-700 space-y-3 md:space-y-4">
              <p>
                Há 7 anos atendendo em consultórios, sempre com o intuito de auxiliar e melhorar a qualidade de vida dos indivíduos, 
                pensando na sua realidade, respeitando seus gostos alimentares, e com a reeducação alimentar buscar seus objetivos 
                e ensinar a fazer escolhas saudáveis para a vida toda.
              </p>
              <p>
                Nutrição de uma forma leve, sem terrorismo nutricional, mostrando que a nutrição é muito além do que apenas 
                comer frutas, verduras e legumes. Desmistificar polêmicas da área, que para emagrecer não significa passar fome, 
                e sim, comer com qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 