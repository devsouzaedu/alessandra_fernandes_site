import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Libre_Baskerville, Montserrat } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

// Definindo as fontes
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat"
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Alessandra Fernandes - Nutricionista Esportiva",
  description: "Nutricionista Esportiva e Funcional especializada em hipertrofia, emagrecimento e saúde funcional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Adicionando as fontes do Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${libreBaskerville.variable} ${montserrat.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <div className="pt-16"> {/* Para compensar a altura do navbar fixo */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
