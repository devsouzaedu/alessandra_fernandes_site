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
              
              <div 
                className="text-gray-700 space-y-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p>
                  "Cuidar da alimentação é um ato de amor-próprio — e meu propósito é te mostrar que isso pode ser leve, possível e transformador."
                </p>
                <p>
                  Com mais de 9 anos de experiência em atendimentos em consultório, venho atuando com o propósito de promover saúde e bem-estar, 
                  sempre respeitando a individualidade de cada paciente. Levo em consideração sua rotina, preferências alimentares e objetivos, 
                  buscando, por meio da reeducação alimentar, oferecer caminhos possíveis e sustentáveis para escolhas mais saudáveis ao longo da vida.
                </p>
                <p>
                  Acredito em uma nutrição leve, acessível e sem extremismos — longe do terrorismo nutricional. Meu compromisso é mostrar que 
                  cuidar da alimentação vai muito além de comer frutas, verduras e legumes. É sobre descomplicar, esclarecer mitos e ensinar que 
                  para emagrecer não é preciso passar fome, mas sim aprender a comer com qualidade e consciência.
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
      </div>
    </section>
  );
} 