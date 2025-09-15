import Image from 'next/image';
import Link from 'next/link';
import { Activity, Scale, Zap, BarChart3, Heart, Clock, CheckCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5511963074495?text=Oi!%20Gostaria%20de%20agendar%20meu%20exame%20de%20bioimpedância...";

export default function BioimpedanciaPage() {
  const parametros = [
    { icon: Scale, title: "Peso corporal total", description: "Medição precisa do peso total" },
    { icon: BarChart3, title: "Percentual de gordura corporal", description: "Análise detalhada da composição de gordura" },
    { icon: Activity, title: "Massa muscular", description: "Avaliação da quantidade de músculo" },
    { icon: Zap, title: "Massa magra", description: "Medição da massa livre de gordura" },
    { icon: Heart, title: "Água corporal total", description: "Distribuição intra e extracelular de água" },
    { icon: Clock, title: "Taxa metabólica basal", description: "Quantas calorias o corpo gasta em repouso" },
    { icon: BarChart3, title: "Índice de massa corporal (IMC)", description: "Cálculo preciso do IMC" },
    { icon: Activity, title: "Equilíbrio entre segmentos", description: "Análise de braços, pernas e tronco" }
  ];

  const beneficios = [
    "Exame rápido e indolor",
    "Análise detalhada da composição corporal",
    "Dados precisos muito além do peso da balança",
    "Estratégias personalizadas de alimentação",
    "Orientações específicas para treino",
    "Acompanhamento da evolução corporal"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-brand-green text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Exame de Bioimpedância
            </h1>
            <p 
              className="text-xl md:text-2xl mb-8 text-green-50"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Análise completa da sua composição corporal
            </p>
            <p 
              className="text-lg leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              Esse exame é rápido, indolor e fornece uma análise detalhada da sua composição corporal — muito além do peso da balança.
            </p>
            <Link 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-brand-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <Activity className="mr-3 h-6 w-6" />
              Agende Seu Exame Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Parâmetros Avaliados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Parâmetros Avaliados
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Conheça todos os dados que são analisados no seu exame
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parametros.map((parametro, index) => {
              const IconComponent = parametro.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-brand-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {parametro.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {parametro.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Por Que Fazer o Exame?
              </h2>
              <p 
                className="text-xl text-gray-600"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                💡 Esses dados permitem entender com mais precisão como está sua saúde e guiar estratégias personalizadas de alimentação, treino e rotina.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-white rounded-lg p-6 shadow-sm"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <CheckCircle className="h-6 w-6 text-brand-green flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{beneficio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Pronto para Conhecer Seu Corpo?
          </h2>
          <p 
            className="text-xl mb-8 text-green-50 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Agende seu exame de bioimpedância e descubra dados precisos sobre sua composição corporal
          </p>
          <Link 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-brand-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <Activity className="mr-3 h-6 w-6" />
            Agendar Exame de Bioimpedância
          </Link>
        </div>
      </section>
    </div>
  );
}
