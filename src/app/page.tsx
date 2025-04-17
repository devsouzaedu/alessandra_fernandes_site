import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#70967f] flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_40%)]"></div>
      <div className="absolute top-1/4 left-10 w-20 h-20 border-t border-l border-white/10 opacity-30"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 border-b border-r border-white/10 opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-10 h-10 border border-[#D4AF37]/20 opacity-20 rotate-45"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-[#D4AF37]/20 opacity-30 rounded-full"></div>
      
      <div className="container max-w-4xl px-6 py-12 relative z-10 text-center">
        {/* Logo ou Imagem */}
        <div className="mb-12 animate-fadeIn">
          <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full border-2 border-[#D4AF37]/50 shadow-lg">
            <Image
              src="/images/alessandra_foto_pfp.jpg"
              alt="Alessandra Fernandes Nutricionista"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Anúncio "Em breve" */}
        <div className="mb-10 animate-fadeIn">
          <span className="inline-block text-[#D4AF37] mb-4 uppercase tracking-widest text-xs font-funnel-sans">Em breve</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-libre mb-6 leading-tight">
            O novo site da<br />
            <span className="text-[#D4AF37]">Alessandra Fernandes</span>
          </h1>
          <p className="text-xl md:text-2xl font-funnel-sans text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nutricionista Esportiva especializada em hipertrofia, emagrecimento e saúde funcional.
          </p>
          
          <div className="w-20 h-px bg-[#D4AF37]/50 mx-auto mb-8"></div>
          
          <p className="text-lg font-funnel-sans text-white/80 mb-8 max-w-xl mx-auto">
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
        
        {/* Social e Contato */}
        <div className="mt-12 pt-6 border-t border-white/10 text-white/70 font-funnel-sans">
          <p className="mb-2">Entre em contato: (11) 96307-4495</p>
          <Link 
            href="https://www.instagram.com/nutrialefernandes" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#D4AF37] hover:text-white transition-colors"
          >
            @nutrialefernandes
          </Link>
        </div>
      </div>
    </main>
  );
}
