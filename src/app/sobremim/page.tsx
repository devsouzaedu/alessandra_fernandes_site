'use client';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import SobreMim from '@/components/homepage/sobre-mim';

export default function SobreMimPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <SobreMim />
      </main>
      <Footer />
    </>
  );
} 