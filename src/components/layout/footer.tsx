import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e informações */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image 
                src="/images/logo_alessandra_normal.png" 
                alt="Logo Alessandra Fernandes" 
                width={150} 
                height={75}
                className="invert opacity-90" // Inverte as cores para ficar branca em fundo escuro
              />
            </div>
            <p className="text-white/70 text-sm text-center md:text-left">
              CRN-3: 123456 <br />
              Nutricionista Clínica e Esportiva
            </p>
          </div>
          
          {/* Links rápidos */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#sobre" className="text-white/70 hover:text-white transition-colors">
                Sobre Mim
              </Link>
              <Link href="#contato" className="text-white/70 hover:text-white transition-colors">
                Contato
              </Link>
              <Link href="https://wa.me/5511963074495" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                Agendar Consulta
              </Link>
            </nav>
          </div>
          
          {/* Redes sociais */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Siga-me nas Redes</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://instagram.com/dra.alessandrafernandes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-green/30 flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-green/30 flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-green/30 flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} Dra. Alessandra Fernandes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 