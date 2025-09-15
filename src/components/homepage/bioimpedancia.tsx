import Link from 'next/link';
import { Activity, Scale, BarChart3, Zap, ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5511963074495?text=Oi!%20Gostaria%20de%20agendar%20meu%20exame%20de%20bioimpedância...";

export default function Bioimpedancia() {
  const destaques = [
    { icon: Scale, title: "Peso corporal total" },
    { icon: BarChart3, title: "Percentual de gordura" },
    { icon: Activity, title: "Massa muscular" },
    { icon: Zap, title: "Taxa metabólica basal" }
  ];

  return (
    <section className="py-16 bg-brand-main">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
              
              {/* Conteúdo Textual */}
              <div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                Exame de Bioimpedância
              </h2>
              
              <p 
                className="text-xl mb-6 text-white/90 leading-relaxed"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Esse exame é rápido, indolor e fornece uma análise detalhada da sua composição corporal — muito além do peso da balança.
              </p>

              <p 
                className="text-lg mb-8 text-white/80 leading-relaxed"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                💡 Esses dados permitem entender com mais precisão como está sua saúde e guiar estratégias personalizadas de alimentação, treino e rotina.
              </p>

              {/* Grid de Destaques */}
              <div 
                className="grid grid-cols-2 gap-4 mb-8"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                {destaques.map((destaque, index) => {
                  const IconComponent = destaque.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-white/20 rounded-full p-2">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-white/90">
                        {destaque.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Botões de Ação */}
              <div 
                className="flex flex-col sm:flex-row gap-4"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <Link 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-brand-main px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  <Activity className="mr-3 h-5 w-5" />
                  Agende Seu Exame Agora
                </Link>
                
                <Link 
                  href="/bioimpedancia"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-main transition-colors duration-300"
                >
                  Saiba Mais
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Área Visual/Ilustrativa */}
            <div 
              className="relative"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <Activity className="h-12 w-12 text-brand-main" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Análise Completa
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-white/90">
                      <span>Água corporal total</span>
                      <span className="font-semibold">✓</span>
                    </div>
                    <div className="flex justify-between items-center text-white/90">
                      <span>Massa magra</span>
                      <span className="font-semibold">✓</span>
                    </div>
                    <div className="flex justify-between items-center text-white/90">
                      <span>IMC</span>
                      <span className="font-semibold">✓</span>
                    </div>
                    <div className="flex justify-between items-center text-white/90">
                      <span>Equilíbrio corporal</span>
                      <span className="font-semibold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
