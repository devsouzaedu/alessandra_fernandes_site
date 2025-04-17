import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#70967f] flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Elementos decorativos sutis - ajustados para fundo verde */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.03),_transparent_30%)]"></div>
      <div className="absolute top-1/4 left-12 w-24 h-24 border-t border-l border-white/10 opacity-50"></div>
      <div className="absolute bottom-1/4 right-12 w-24 h-24 border-b border-r border-white/10 opacity-50"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-[#D4AF37]/40 opacity-60 rotate-45"></div>
      
      <div className="container max-w-xl px-6 py-10 relative z-10 text-center">
        {/* Conteúdo principal - Apenas Título e CTA */}
        <div className="mb-12 animate-fadeIn">
          <span className="inline-block text-[#D4AF37] mb-4 uppercase tracking-widest text-xs font-funnel-sans">Em breve</span>
          
          <h1 className="text-4xl md:text-5xl mb-10 leading-tight font-serif font-normal text-white">
            O novo site da<br />
            <span className="text-[#D4AF37] font-bold">Alessandra Fernandes</span>
          </h1>
          
          <div className="w-20 h-px bg-[#D4AF37]/50 mx-auto mb-10"></div>
        </div>
        
        {/* Link para WhatsApp */}
        <div className="animate-fadeIn">
          <Link 
            href="https://wa.me/5511963074495?text=Oi%2C%20gostaria%20de%20agendar%20uma%20consulta%21" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-[#D4AF37] text-black font-funnel-sans text-base font-medium rounded-sm transition-all duration-300 hover:bg-white hover:text-[#70967f] hover:shadow-lg"
          >
            Agende uma Consulta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
