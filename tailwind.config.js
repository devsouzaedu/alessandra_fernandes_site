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
          DEFAULT: "#EEE8DC",
          50: "#faf7f3",
        },
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
        },
      },
      animation: {
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 2s infinite',
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
      },
    },
  },
  safelist: [
    'bg-primary',
    'bg-accent',
    'text-white',
    'text-accent',
    'hover:bg-primary',
    'hover:bg-gray-800',
    'hover:text-accent',
  ],
  plugins: [],
}; 