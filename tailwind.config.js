/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        primary: {
          DEFAULT: "#729080",
          dark: "#658273",
        },
        'brand-green': '#729080',
        'brand-green-alt': '#86A69A',
        secondary: "#D4AF37",
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          300: "#f9a8d4",
          500: "#ec4899",
          600: "#db2777",
          800: "#9d174d",
        },
        green: {
          300: "#86efac",
          primary: "#729080",
          secondary: "#86A69A",
          light: "#ECF2EF"
        },
      },
      animation: {
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 2s infinite',
        'spin-slow': 'spin 4s linear infinite',
        carouselRotate: 'carouselRotate 10s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
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
        carouselRotate: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  safelist: [
    'bg-primary',
    'bg-brand-green',
    'bg-brand-green-alt',
    'bg-secondary',
    'bg-green-primary',
    'bg-green-secondary',
    'bg-green-light',
    'text-white',
    'text-brand-green',
    'text-brand-green-alt',
    'text-secondary',
    'text-green-primary',
    'hover:bg-primary',
    'hover:bg-primary-dark',
    'hover:bg-gray-800',
    'hover:bg-green-primary',
    'hover:bg-green-secondary',
    'hover:text-brand-green',
    'hover:text-brand-green-alt',
    'hover:text-green-primary',
  ],
  plugins: [],
}; 