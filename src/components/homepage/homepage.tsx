import Navbar from '@/components/layout/navbar';
import HeroSection from '@/components/homepage/hero-section';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* Outras seções da página inicial podem ser adicionadas aqui */}
      </main>
      {/* Footer pode ser adicionado aqui */}
    </>
  );
} 