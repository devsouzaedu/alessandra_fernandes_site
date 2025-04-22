'use client';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Especialidades from '@/components/homepage/especialidades';

export default function EspecialidadesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <Especialidades />
      </main>
      <Footer />
    </>
  );
} 