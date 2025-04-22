'use client';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import NossoEspaco from '@/components/homepage/nosso-espaco';

export default function EspacoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <NossoEspaco />
      </main>
      <Footer />
    </>
  );
} 