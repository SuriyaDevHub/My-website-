import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#efeee9',
      },
      fontFamily: {
        hn: ['"Archivo"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['"Archivo"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Archivo"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        riseIn: {
          from: { opacity: '0', transform: 'translateY(4vh) scale(1.03)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out both',
        'rise-in': 'riseIn 1.4s cubic-bezier(0.22,1,0.36,1) both',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
        line: 'lineGrow 1.1s cubic-bezier(0.76,0,0.24,1) both',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
