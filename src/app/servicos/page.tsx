'use client';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AreasAtuacao from '@/components/homepage/areas-atuacao';

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <AreasAtuacao />
      </main>
      <Footer />
    </>
  );
} 