import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Libre_Baskerville, Montserrat, Lexend } from "next/font/google";

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

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-lexend"
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
        {/* Importação da fonte Lexend */}
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${libreBaskerville.variable} ${montserrat.variable} ${inter.variable} ${lexend.variable} font-lexend antialiased`}>
        {children}
      </body>
    </html>
  );
}
