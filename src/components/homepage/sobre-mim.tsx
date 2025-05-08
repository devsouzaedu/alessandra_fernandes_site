import Image from 'next/image';
import { GraduationCap, Award, Users, CalendarClock } from 'lucide-react';

export default function SobreMim() {
  return (
    <section className="py-10 bg-brand-green" id="sobre">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Quem Eu Sou
        </h2>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Foto da Doutora */}
            <div 
              className="md:col-span-5 h-full" 
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="relative h-64 sm:h-80 md:h-full w-full">
                <Image
                  src="/images/alessandra_foto_pfp.jpg"
                  alt="Dra. Alessandra Fernandes"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Informações biográficas */}
            <div 
              className="md:col-span-7 p-6 md:p-8" 
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div 
                  className="flex items-start gap-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <GraduationCap size={24} className="text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Formação</h3>
                    <p className="text-gray-600">Universidade Presbiteriana Mackenzie (2016)</p>
                  </div>
                </div>
                
                <div 
                  className="flex items-start gap-3"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <Award size={24} className="text-brand-green-alt flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Especialização</h3>
                    <p className="text-gray-600">Pós-graduada em Nutrição Esportiva pelo Centro de Estudos de Fisiologia do Exercício</p>
                  </div>
                </div>
                
                <div 
                  className="flex items-start gap-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Users size={24} className="text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Experiência</h3>
                    <p className="text-gray-600">Membro da comissão técnica de judô da Força Aérea Brasileira</p>
                  </div>
                </div>
                
                <div 
                  className="flex items-start gap-3"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  <CalendarClock size={24} className="text-brand-green-alt flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Atuação</h3>
                    <p className="text-gray-600">9 anos de experiência em consultório</p>
                  </div>
                </div>
              </div>
              
              {/* Quote destacada */}
              <div 
                className="text-gray-700 mb-6 bg-brand-green/10 p-4 rounded-lg border-l-4 border-brand-green italic"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p className="text-lg font-semibold text-brand-green">
                  &quot;Cuidar da alimentação é um ato de amor-próprio — e meu propósito é te mostrar que isso pode ser leve, possível e transformador.&quot;
                </p>
              </div>
              
              {/* Timeline de carreira */}
              <div className="mb-6 relative" data-aos="fade-up" data-aos-delay="350">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Minha Trajetória</h3>
                <div className="border-l-2 border-brand-green pl-4 space-y-4">
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-brand-green rounded-full -left-[1.65rem] top-1"></div>
                    <p className="font-semibold text-gray-800">2016</p>
                    <p className="text-gray-600">Formação em Nutrição pela Universidade Presbiteriana Mackenzie</p>
                  </div>
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-brand-green rounded-full -left-[1.65rem] top-1"></div>
                    <p className="font-semibold text-gray-800">2017</p>
                    <p className="text-gray-600">Pós-graduação em Nutrição Esportiva</p>
                  </div>
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-brand-green rounded-full -left-[1.65rem] top-1"></div>
                    <p className="font-semibold text-gray-800">2018-2020</p>
                    <p className="text-gray-600">Membro da comissão técnica de judô da Força Aérea Brasileira</p>
                  </div>
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-brand-green rounded-full -left-[1.65rem] top-1"></div>
                    <p className="font-semibold text-gray-800">Atual</p>
                    <p className="text-gray-600">Atendimento personalizado em consultório</p>
                  </div>
                </div>
              </div>

              {/* Texto com bullets para melhor escaneabilidade */}
              <div 
                className="text-gray-700"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Minha Abordagem</h3>
                <ul className="space-y-3 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green text-xl mt-0.5">•</span>
                    <p className="flex-1">
                      <span className="font-semibold">Nutrição personalizada:</span> Respeito a individualidade de cada paciente, considerando rotina, preferências e objetivos únicos.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green text-xl mt-0.5">•</span>
                    <p className="flex-1">
                      <span className="font-semibold">Abordagem sem extremismos:</span> Acredito em uma nutrição leve, acessível e equilibrada, longe do terrorismo nutricional.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green text-xl mt-0.5">•</span>
                    <p className="flex-1">
                      <span className="font-semibold">Desmistificando a nutrição:</span> Mostro que nutrição vai muito além de apenas comer frutas e legumes, é sobre escolhas conscientes.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-green text-xl mt-0.5">•</span>
                    <p className="flex-1">
                      <span className="font-semibold">Emagrecimento saudável:</span> Ensino que para emagrecer não precisa passar fome, mas sim aprender a comer com qualidade e equilíbrio.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 