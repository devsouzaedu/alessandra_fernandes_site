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
        'brand-main': "#729080", // Cor principal
        'brand-secondary': "#13896F", // Elementos secundários
        secondary: "#D4AF37", // Cor ouro mantida
      },
      fontFamily: {
        inter: "var(--font-inter)",
        montserrat: "var(--font-montserrat)",
        libre: ["'Libre Baskerville'", "serif"],
        "funnel-sans": ["'Funnel Sans'", "sans-serif"],
        "lexend": ["var(--font-lexend)", "Lexend", "sans-serif"],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease forwards',
        slideUp: 'slideUp 0.8s ease forwards',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  safelist: [
    'bg-brand-main',
    'bg-brand-secondary',
    'text-brand-main',
    'text-brand-secondary',
    'hover:bg-brand-main',
    'hover:bg-brand-secondary',
    'hover:text-brand-main',
    'hover:text-brand-secondary',
    'text-white',
    'text-black',
    'font-lexend',
  ],
};

export default config; 