import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: "#70967f",
        secondary: "#D4AF37", // Cor ouro
        "primary-dark": "#5a7a66",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        montserrat: "var(--font-montserrat)",
        libre: ["'Libre Baskerville'", "serif"],
        "funnel-sans": ["'Funnel Sans'", "sans-serif"],
      },
      // ... outras extensões de configuração
    },
  },
  // ... resto da configuração
};

export default config; 