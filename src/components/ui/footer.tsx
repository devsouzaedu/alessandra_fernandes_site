import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Alessandra Fernandes</h3>
            <p className="mb-2">Nutricionista Esportiva</p>
            <p className="text-sm text-gray-300">Especialista em Hipertrofia, Emagrecimento, Performance e Doenças Crônicas</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p>
                  Avenida Trindade, 254<br />
                  Prédio Office Bethaville<br />
                  Barueri, SP
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:alerfernandesmutri@gmail.com" className="hover:underline">
                  alerfernandesmutri@gmail.com
                </a>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex space-x-3">
                  <a 
                    href="https://www.instagram.com/nutrialefernandes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/atendimento" className="hover:underline">Atendimento</Link>
              </li>
              <li>
                <Link href="/ferramentas" className="hover:underline">Ferramentas</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">Blog</Link>
              </li>
              <li>
                <Link href="/contato" className="hover:underline">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Alessandra Fernandes Nutrição. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://www.instagram.com/nutrialefernandes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5 mr-2" />
              @nutrialefernandes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 