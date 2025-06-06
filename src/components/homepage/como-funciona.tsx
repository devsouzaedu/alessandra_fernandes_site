import { MessageSquare, Target, HeartHandshake, Sparkles, LineChart, ClipboardEdit, BarChart } from 'lucide-react';

export default function ComoFuncionaConsultas() {
  return (
    <section className="py-20 bg-gray-50" id="como-funciona">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Como funciona meu atendimento</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-semibold">
            Aqui você não encontrará apenas uma consulta, mas todo o suporte necessário para atingir resultados eficazes e duradouros.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Além do plano alimentar, você receberá:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-brand-green/5 group">
              <div className="flex items-start gap-4">
                <div className="text-brand-green p-2 bg-brand-green/10 rounded-lg group-hover:bg-brand-green/20 transition-colors">
                  <LineChart size={24} />
                </div>
                <p className="text-brand-green font-semibold mt-2">Feedbacks semanais</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-brand-green/5 group">
              <div className="flex items-start gap-4">
                <div className="text-brand-green p-2 bg-brand-green/10 rounded-lg group-hover:bg-brand-green/20 transition-colors">
                  <ClipboardEdit size={24} />
                </div>
                <p className="text-brand-green font-semibold mt-2">Alterações no cardápio para aumentar sua aderência</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-brand-green/5 group">
              <div className="flex items-start gap-4">
                <div className="text-brand-green p-2 bg-brand-green/10 rounded-lg group-hover:bg-brand-green/20 transition-colors">
                  <BarChart size={24} />
                </div>
                <p className="text-brand-green font-semibold mt-2">Ajustes de estratégias para evitar a estagnação dos resultados</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto font-semibold">
            Será um processo de transformação, onde juntos vamos desenvolver uma relação com a alimentação que se adapte à sua rotina, objetivos, preferências e estilo de vida.
          </p>
        </div>
      </div>

      <div className="bg-[#729080] py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">4 pilares do acompanhamento</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="text-[#729080] p-3 bg-[#729080]/10 rounded-lg mb-4 group-hover:bg-[#729080]/20 transition-colors inline-block">
                <Target size={32} />
              </div>
              <h4 className="text-xl font-semibold text-[#729080] mb-2">Individualidade</h4>
              <p className="text-gray-600">
                Cada pessoa é única, com suas particularidades e objetivos. Todo o acompanhamento é centrado em você.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="text-[#729080] p-3 bg-[#729080]/10 rounded-lg mb-4 group-hover:bg-[#729080]/20 transition-colors inline-block">
                <HeartHandshake size={32} />
              </div>
              <h4 className="text-xl font-semibold text-[#729080] mb-2">Adequação</h4>
              <p className="text-gray-600">
                Não existe uma estratégia nutricional única para todos. Usaremos a que mais se adequar à sua realidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="text-[#729080] p-3 bg-[#729080]/10 rounded-lg mb-4 group-hover:bg-[#729080]/20 transition-colors inline-block">
                <MessageSquare size={32} />
              </div>
              <h4 className="text-xl font-semibold text-[#729080] mb-2">Suporte contínuo</h4>
              <p className="text-gray-600">
                Dúvidas, dificuldades e imprevistos surgirão, e eu estarei disponível para ajudar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="text-[#729080] p-3 bg-[#729080]/10 rounded-lg mb-4 group-hover:bg-[#729080]/20 transition-colors inline-block">
                <Sparkles size={32} />
              </div>
              <h4 className="text-xl font-semibold text-[#729080] mb-2">Educação e autonomia</h4>
              <p className="text-gray-600">
                Durante o acompanhamento, vou ensinar e fornecer materiais para que você mantenha seus resultados por conta própria.
              </p>
            </div>
          </div>
        
          <div className="text-center mt-16">
            <p className="text-lg font-semibold text-white mb-8">Quer um acompanhamento individualizado?</p>
            <a 
              href="#contato" 
              className="inline-block bg-[#e8f3ef] text-[#5b7566] px-10 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-white"
            >
              Agende já sua consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}