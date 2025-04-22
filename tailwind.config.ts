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
        'brand-green': '#6f9880', // Cor principal da marca
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
    'text-primary',
    'text-secondary',
    'text-brand-green',
    'text-white',
    'hover:bg-primary',
    'hover:bg-primary-dark',
    'hover:bg-gray-800',
    'hover:text-brand-green',
    'font-lexend',
  ],
};

export default config; 