import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alessandra Fernandes | Nutricionista Esportiva",
  description: "Especialista em Nutrição para Hipertrofia, Emagrecimento, Performance e Doenças Crônicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-16"> {/* Para compensar a altura do navbar fixo */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
