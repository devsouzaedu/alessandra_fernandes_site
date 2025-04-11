import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BarChart2, FileText, Calendar, ChevronRight, Clock, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-primary relative">
        {/* Elementos elegantes decorativos */}
        <div className="absolute top-1/4 left-8 w-20 h-20 border-t border-l border-black/10 opacity-30"></div>
        <div className="absolute bottom-1/4 right-8 w-20 h-20 border-b border-r border-black/10 opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 border border-black/10 opacity-20 rotate-45"></div>
        
        <div className="container py-20 md:py-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-5 font-montserrat animate-slideInLeft leading-tight">
              Nutrição Personalizada para seus Objetivos
            </h1>
            <p className="text-lg mb-8 animate-slideInLeft delay-100 text-gray-700 leading-relaxed">
              Especialista em Nutrição Esportiva para Hipertrofia, Emagrecimento, 
              Performance e Doenças Crônicas.
            </p>
            <div className="flex flex-wrap gap-4 animate-slideInLeft delay-200">
              <Link 
                href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%21" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Agende uma Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#servicos" 
                className="btn btn-outline transform transition-transform duration-300 hover:scale-[1.02]"
              >
                Conheça os Serviços
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fadeIn">
            <div className="relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 border border-black/10"></div>
              <Image
                src="/images/alessandra_foto_lado.png"
                alt="Alessandra Fernandes Nutricionista"
                width={600}
                height={600}
                className="rounded-sm hover:brightness-105 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* O que você irá receber Section */}
      <section id="servicos" className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-black/5"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/5"></div>
        
        <div className="container">
          <div className="mb-16 text-center animate-fadeIn">
            <span className="inline-block text-gray-600 mb-3 uppercase tracking-widest text-xs font-medium">Atendimento Exclusivo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-montserrat">
              O que você irá receber
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">Abordagem personalizada e completa para garantir resultados duradouros</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-primary p-8 rounded-sm shadow-sm transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md group">
              <div className="mb-5 opacity-80">
                <FileText className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-montserrat">Avaliação Completa</h3>
              <p className="text-gray-700">Avaliação detalhada de seu histórico, hábitos alimentares e objetivos para criar um plano personalizado.</p>
            </div>
            
            <div className="bg-primary p-8 rounded-sm shadow-sm transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md group">
              <div className="mb-5 opacity-80">
                <Calendar className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-montserrat">Cardápio Personalizado</h3>
              <p className="text-gray-700">Planos alimentares adaptados à sua rotina, preferências e necessidades nutricionais específicas.</p>
            </div>
            
            <div className="bg-primary p-8 rounded-sm shadow-sm transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md group">
              <div className="mb-5 opacity-80">
                <BarChart2 className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-montserrat">Solicitação de Exames</h3>
              <p className="text-gray-700">Análise e solicitação de exames laboratoriais para identificar possíveis deficiências nutricionais.</p>
            </div>
            
            <div className="bg-primary p-8 rounded-sm shadow-sm transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md group">
              <div className="mb-5 opacity-80">
                <Award className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-montserrat">Prescrições Nutricionais</h3>
              <p className="text-gray-700">Recomendações específicas de suplementos e fitoterápicos quando necessário para otimizar resultados.</p>
            </div>
            
            <div className="bg-primary p-8 rounded-sm shadow-sm transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md group">
              <div className="mb-5 opacity-80">
                <Users className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-montserrat">Acesso ao Painel Digital</h3>
              <p className="text-gray-700">Acompanhamento contínuo de seu progresso através de nossa plataforma digital exclusiva.</p>
            </div>
            
            <div className="bg-primary p-8 rounded-sm shadow-sm transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md group">
              <div className="mb-5 opacity-80">
                <Clock className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-montserrat">Suporte via WhatsApp</h3>
              <p className="text-gray-700">Tire suas dúvidas e receba orientações rápidas através do suporte por mensagens.</p>
            </div>
          </div>
          
          <div className="mt-14 text-center animate-fadeIn">
            <Link 
              href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%21" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary transform transition-transform duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
            >
              Iniciar meu atendimento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="py-20 bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-black/5"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/5"></div>
        
        <div className="container">
          <div className="mb-16 text-center animate-fadeIn">
            <span className="inline-block text-gray-600 mb-3 uppercase tracking-widest text-xs font-medium">Áreas de Atuação</span>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-montserrat">
              Áreas de Especialização
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">Atendimento especializado e personalizado para cada objetivo</p>
          </div>
          
          <div className="space-y-12">
            {/* Nutrição Clínica Funcional Integrativa */}
            <div className="bg-white p-10 rounded-sm shadow-sm transform transition-transform duration-300 hover:shadow-md animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold font-montserrat mb-4">
                    Nutrição Clínica Funcional Integrativa
                  </h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Nutrição Clínica Funcional e Integrativa é uma ciência que, na prática engloba a prevenção e tratamento de doenças, entendendo que o ser humano está todo conectado e precisa ser tratado como uma visão global e não apenas por partes, otimizando o atendimento clínico, trazendo saúde e bem-estar.
                  </p>
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Os alimentos são a base da saúde intestinal, que aliados a fitoterápicos, probióticos, prebióticos e terapias integrativas, compõem a modulação intestinal com equilíbrio da flora intestinal, livrando o paciente de sintomas indesejáveis e doenças oriundas do desequilíbrio biológico, promovendo a saúde e bem-estar do paciente, trazendo qualidade de vida.
                  </p>
                  <Link 
                    href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20Nutri%C3%A7%C3%A3o%20Funcional%21" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black font-medium border-b border-black pb-1 hover:opacity-70 transition-opacity"
                  >
                    Agende uma consulta especializada
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/80">
                    <Award className="h-8 w-8 text-black/70" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Nutrição Esportiva */}
            <div className="bg-white p-10 rounded-sm shadow-sm transform transition-transform duration-300 hover:shadow-md animate-fadeIn delay-200">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold font-montserrat mb-4">
                    Nutrição Esportiva
                  </h3>
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    O nutricionista esportivo é essencial para todos os tipos de atletas – desde os iniciantes até aqueles que atingiram seu auge de desempenho. Alimentação e suplementação adequada é primordial para aprimorar a performance, perder gordura, ganho de massa muscular e recuperação física.
                  </p>
                  <Link 
                    href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20Nutri%C3%A7%C3%A3o%20Esportiva%21" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black font-medium border-b border-black pb-1 hover:opacity-70 transition-opacity"
                  >
                    Agende uma consulta especializada
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/80">
                    <BarChart2 className="h-8 w-8 text-black/70" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Emagrecimento */}
            <div className="bg-white p-10 rounded-sm shadow-sm transform transition-transform duration-300 hover:shadow-md animate-fadeIn delay-400">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold font-montserrat mb-4">
                    Emagrecimento
                  </h3>
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    O objetivo do acompanhamento nutricional é ajudar a emagrecer, ter mais vitalidade e energia no seu cotidiano, tratando o organismo como um todo, de forma a recuperar e manter sua saúde e bem-estar. O cuidado começa pela formulação de um plano alimentar adaptado à sua rotina, promovendo uma genuína mudança de estilo de vida, com mais leveza e efetividade.
                  </p>
                  <Link 
                    href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%20para%20emagrecimento%21" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black font-medium border-b border-black pb-1 hover:opacity-70 transition-opacity"
                  >
                    Agende uma consulta especializada
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/80">
                    <Calendar className="h-8 w-8 text-black/70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-black/5"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/5"></div>
        
        <div className="container">
          <div className="mb-16 text-center animate-fadeIn">
            <span className="inline-block text-gray-600 mb-3 uppercase tracking-widest text-xs font-medium">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-montserrat">
              Feedback dos meus pacientes
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">Experiências reais de quem já transformou sua vida com nosso acompanhamento</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary p-8 rounded-sm shadow-sm transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md animate-fadeIn">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 relative rounded-full overflow-hidden shadow-sm border border-black/10">
                  <Image 
                    src="/images/garotas_feedback_pfp (1).jpg" 
                    alt="Depoimento de paciente" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold font-montserrat">Marina Silva</h4>
                  <p className="text-sm text-gray-700">Paciente há 8 meses</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;A Alessandra transformou minha relação com a alimentação. Perdi 12kg em 6 meses, sem passar fome e com muita qualidade de vida. Além da melhora na composição corporal, minha saúde intestinal melhorou significativamente!&quot;
              </p>
            </div>
            
            <div className="bg-primary p-8 rounded-sm shadow-sm transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md animate-fadeIn delay-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 relative rounded-full overflow-hidden shadow-sm border border-black/10">
                  <Image 
                    src="/images/garotas_feedback_pfp (2).jpg" 
                    alt="Depoimento de paciente" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold font-montserrat">Carolina Mendes</h4>
                  <p className="text-sm text-gray-700">Atleta de corrida</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Como atleta, sempre tive dificuldade em equilibrar minha alimentação com os treinos. A Alessandra desenvolveu um plano que melhorou minha performance e recuperação. Consegui reduzir meu tempo nas provas e ganhar mais resistência!&quot;
              </p>
            </div>
            
            <div className="bg-primary p-8 rounded-sm shadow-sm transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md animate-fadeIn delay-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 relative rounded-full overflow-hidden shadow-sm border border-black/10">
                  <Image 
                    src="/images/garotas_feedback_pfp (3).jpg" 
                    alt="Depoimento de paciente" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold font-montserrat">Patrícia Almeida</h4>
                  <p className="text-sm text-gray-700">Paciente com intolerâncias alimentares</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Após anos sofrendo com sintomas intestinais, finalmente encontrei na Alessandra uma profissional que entendeu minhas necessidades. Com o plano funcional, consegui eliminar os desconfortos e retomar minha qualidade de vida!&quot;
              </p>
            </div>
            
            <div className="bg-primary p-8 rounded-sm shadow-sm transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-md animate-fadeIn delay-600">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4 relative rounded-full overflow-hidden shadow-sm border border-black/10">
                  <Image 
                    src="/images/garotas_feedback_pfp (4).jpg" 
                    alt="Depoimento de paciente" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold font-montserrat">Luísa Soares</h4>
                  <p className="text-sm text-gray-700">Foco em hipertrofia</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Buscava ganho de massa muscular e a Alessandra me mostrou que era possível sem recorrer a suplementos desnecessários. Com uma alimentação bem planejada, ganhei 5kg de massa magra em 4 meses e melhorei minha definição muscular!&quot;
              </p>
            </div>
          </div>
          
          <div className="mt-14 text-center animate-fadeIn">
            <Link 
              href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%21" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary transform transition-transform duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md"
            >
              Agende sua avaliação
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre a Alessandra Section */}
      <section className="py-20 bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-px bg-black/5"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/5"></div>
        
        <div className="container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-12 md:mb-0 animate-fadeIn">
              <div className="relative w-64 h-64 mx-auto overflow-hidden shadow-md">
                <div className="absolute inset-0 border border-black/10"></div>
                <Image
                  src="/images/alessandra_foto_pfp.jpg"
                  alt="Alessandra Fernandes"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="text-center mt-8">
                <Link 
                  href="https://www.instagram.com/nutrialefernandes" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black/70 font-medium hover:text-black transition-colors"
                >
                  @nutrialefernandes
                </Link>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-16 animate-fadeIn">
              <span className="inline-block text-gray-600 mb-3 uppercase tracking-widest text-xs font-medium">Profissional</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Sobre Mim</h2>
              <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                Formada em 2016 pela Universidade Presbiteriana Mackenzie. Pós graduada em Nutrição Esportiva pelo Centro de Estudos de Fisiologia do Exercício. Membro da comissão técnica de judô da Força Aérea Brasileira.
              </p>
              <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                Há 7 anos atendendo em consultórios, sempre com o intuito de auxiliar e melhorar a qualidade de vida dos indivíduos, pensando na sua realidade, respeitando seus gostos alimentares, e com a reeducação alimentar buscar seus objetivos e ensinar a fazer escolhas saudáveis para a vida toda.
              </p>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                Nutrição de uma forma leve, sem terrorismo nutricional, mostrando que a nutrição é muito além do que apenas comer frutas, verduras e legumes. Desmistificar polêmicas da área, que para emagrecer não significa passar fome, e sim, comer com qualidade.
              </p>
              
              <Link 
                href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%21" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary transform transition-transform duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md inline-flex"
              >
                Agende sua consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_40%)]"></div>
        
        <div className="container text-center relative z-10">
          <span className="inline-block text-gray-400 mb-3 uppercase tracking-widest text-xs font-medium">Transformação</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 font-montserrat">Pronto para transformar sua alimentação?</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Agende uma consulta e descubra como uma nutrição personalizada pode ajudar você 
            a alcançar seus objetivos de saúde e performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%21" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Agende sua Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="#servicos"
              className="btn bg-transparent border border-white/30 text-white hover:bg-white/5 transform transition-transform duration-300 hover:scale-[1.02]"
            >
              Ver Serviços
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link 
          href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%21" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-4 rounded-sm shadow-md flex items-center justify-center hover:bg-gray-800 transition-colors"
          aria-label="Agendar consulta pelo WhatsApp"
        >
          <span className="sr-only">Agendar consulta</span>
          <ArrowRight className="h-6 w-6" />
        </Link>
      </div>
    </main>
  );
}
