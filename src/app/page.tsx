import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#70967f] flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent_40%)]"></div>
      <div className="absolute top-1/4 left-12 w-24 h-24 border-t border-l border-white/5 opacity-20"></div>
      <div className="absolute bottom-1/4 right-12 w-24 h-24 border-b border-r border-white/5 opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-[#D4AF37]/10 opacity-20 rotate-45"></div>
      
      <div className="container max-w-2xl px-6 py-10 relative z-10 text-center">
        {/* Conteúdo principal - Título e Texto menores */}
        <div className="mb-10 animate-fadeIn">
          <span className="inline-block text-[#D4AF37] mb-4 uppercase tracking-widest text-xs font-funnel-sans">Em breve</span>
          
          <h1 className="text-4xl md:text-5xl mb-8 leading-tight font-libre font-normal">
            O novo site da<br />
            <span className="text-[#D4AF37] font-bold">Alessandra Fernandes</span>
          </h1>
          
          <div className="w-20 h-px bg-[#D4AF37]/40 mx-auto mb-8"></div>
          
          <p className="text-lg font-funnel-sans text-white/80 mb-8 max-w-lg mx-auto leading-relaxed">
            Nutricionista Esportiva especializada em hipertrofia, emagrecimento e saúde funcional.
          </p>
          
          <p className="text-sm font-funnel-sans text-white/60 mb-10 max-w-md mx-auto">
            Um novo site está sendo desenvolvido para oferecer a melhor experiência para você.
            Aguarde novidades!
          </p>
        </div>
        
        {/* Link para WhatsApp menor */}
        <div className="animate-fadeIn">
          <Link 
            href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%21" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#D4AF37] text-black font-funnel-sans text-sm font-medium rounded-sm transition-all duration-300 hover:bg-white hover:shadow-md"
          >
            Agende uma Consulta
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        {/* Contato menor */}
        <div className="mt-12 pt-5 border-t border-white/10 text-white/50 font-funnel-sans text-xs">
          <p className="mb-1">Entre em contato: (11) 96307-4495</p>
          <Link 
            href="https://www.instagram.com/nutrialefernandes" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#D4AF37]/70 hover:text-[#D4AF37] transition-colors"
          >
            @nutrialefernandes
          </Link>
        </div>
      </div>
    </main>
  );
}
