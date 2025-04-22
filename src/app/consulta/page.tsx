'use client';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ComoFuncionaConsultas from '@/components/homepage/como-funciona';

export default function ConsultaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <ComoFuncionaConsultas />
      </main>
      <Footer />
    </>
  );
} 