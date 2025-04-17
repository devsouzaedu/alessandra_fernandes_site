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
      
      <div className="container max-w-3xl px-6 py-12 relative z-10 text-center">
        {/* Conteúdo principal - apenas título e texto */}
        <div className="mb-14 animate-fadeIn">
          <span className="inline-block text-[#D4AF37] mb-5 uppercase tracking-widest text-xs font-funnel-sans">Em breve</span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-10 leading-tight font-normal">
            O novo site da<br />
            <span className="text-[#D4AF37] font-bold">Alessandra Fernandes</span>
          </h1>
          
          <div className="w-24 h-px bg-[#D4AF37]/50 mx-auto mb-10"></div>
          
          <p className="text-xl font-funnel-sans text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nutricionista Esportiva especializada em hipertrofia, emagrecimento e saúde funcional.
          </p>
          
          <p className="text-base font-funnel-sans text-white/70 mb-12 max-w-xl mx-auto">
            Um novo site está sendo desenvolvido para oferecer a melhor experiência para você.
            Aguarde novidades!
          </p>
        </div>
        
        {/* Link para WhatsApp */}
        <div className="animate-fadeIn">
          <Link 
            href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%21" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-black font-funnel-sans font-medium rounded-sm transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            Agende uma Consulta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        {/* Contato */}
        <div className="mt-16 pt-6 border-t border-white/10 text-white/60 font-funnel-sans text-sm">
          <p className="mb-2">Entre em contato: (11) 96307-4495</p>
          <Link 
            href="https://www.instagram.com/nutrialefernandes" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors"
          >
            @nutrialefernandes
          </Link>
        </div>
      </div>
    </main>
  );
}
