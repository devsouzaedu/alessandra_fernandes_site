import Navbar from '@/components/layout/navbar';
import HeroSection from '@/components/homepage/hero-section';
import Especialidades from '@/components/homepage/especialidades';
import AreasAtuacao from '@/components/homepage/areas-atuacao';
import ComoFuncionaConsultas from '@/components/homepage/como-funciona';
import FraseHumanizada from '@/components/homepage/frase-humanizada';
import NossoEspaco from '@/components/homepage/nosso-espaco';
import SobreMim from '@/components/homepage/sobre-mim';
import Feedbacks from '@/components/homepage/feedbacks';
import Contato from '@/components/homepage/contato';
import Footer from '@/components/layout/footer';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Especialidades />
        <AreasAtuacao />
        <ComoFuncionaConsultas />
        <FraseHumanizada />
        <NossoEspaco />
        <SobreMim />
        <Feedbacks />
        <Contato />
      </main>
      <Footer />
    </>
  );
} 