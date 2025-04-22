'use client';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Contato from '@/components/homepage/contato';

export default function EnderecoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <Contato />
      </main>
      <Footer />
    </>
  );
} 