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
        primary: "#006D66", // Verde principal
        "primary-dark": "#005651", // Versão mais escura do principal
        secondary: "#D4AF37", // Cor ouro mantida
        'brand-green': '#006D66', // Verde principal
        'brand-green-alt': '#68A097', // Verde secundário
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
    'bg-primary',
    'bg-secondary',
    'bg-brand-green',
    'bg-brand-green-alt',
    'text-primary',
    'text-secondary',
    'text-brand-green',
    'text-brand-green-alt',
    'text-white',
    'hover:bg-primary',
    'hover:bg-primary-dark',
    'hover:bg-brand-green-alt',
    'hover:bg-gray-800',
    'hover:text-brand-green',
    'hover:text-brand-green-alt',
    'font-lexend',
  ],
};

export default config; 