import { Mail, MapPin, Instagram, Linkedin, Calendar } from "lucide-react";

export default function Contato() {
  return (
    <main>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">Entre em Contato</h1>
            <p className="text-lg mb-0">
              Estou à disposição para responder suas dúvidas e agendar sua consulta nutricional.
            </p>
          </div>
        </div>
      </section>

      {/* Contato Info e Formulário */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-montserrat">Informações de Contato</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Endereço</h3>
                    <p>
                      Avenida Trindade, 254<br />
                      Prédio Office Bethaville<br />
                      Barueri, SP
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:alerfernandesmutri@gmail.com" className="hover:underline">
                      alerfernandesmutri@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Horário de Atendimento</h3>
                    <p>
                      Segunda a Sexta: 8h às 19h<br />
                      Sábados: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 font-montserrat">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-accent text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-accent text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-montserrat">Envie uma Mensagem</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium mb-2">Nome Completo</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="seu.email@exemplo.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium mb-2">Assunto</label>
                  <select
                    id="assunto"
                    name="assunto"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="agendamento">Agendamento de Consulta</option>
                    <option value="duvida">Dúvida</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-primary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center font-montserrat">Localização</h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1758128087093!2d-46.86438542385761!3d-23.52903376258215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf026c105a6675%3A0x648842201d599535!2sAv.%20Trindade%2C%20254%20-%20Alphaville%20Industrial%2C%20Barueri%20-%20SP%2C%2006473-005!5e0!3m2!1spt-BR!2sbr!4v1712786989868!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
} 