import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Libre_Baskerville, Montserrat } from "next/font/google";

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
        {/* Preconnect com as fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${libreBaskerville.variable} ${montserrat.variable} ${inter.variable} font-libre antialiased`}>
        {children}
      </body>
    </html>
  );
}
