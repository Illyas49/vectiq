/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        surface: {
          0: '#050507',
          1: '#0a0a0f',
          2: '#0f0f16',
          3: '#16161f',
          4: '#1e1e2a',
          5: '#282836',
        },
        line: {
          subtle: 'rgba(255, 255, 255, 0.035)',
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          strong: 'rgba(255, 255, 255, 0.1)',
        },
        text: {
          primary: '#eeeef0',
          secondary: '#7e7e92',
          tertiary: '#4a4a60',
        },
        accent: {
          DEFAULT: '#38bda0',
          dim: '#2a9a80',
          bright: '#4dd4b6',
          glow: 'rgba(56, 189, 160, 0.1)',
        },
        blue: {
          DEFAULT: '#3b82c4',
          dim: '#2a6aa8',
          glow: 'rgba(59, 130, 196, 0.1)',
        },
      },
      fontSize: {
        'display': ['clamp(3.5rem, 7vw, 6.5rem)', { lineHeight: '1.02', letterSpacing: '-0.04em', fontWeight: '600' }],
        'heading-1': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '600' }],
        'heading-2': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '500' }],
        'heading-3': ['clamp(1.125rem, 1.5vw, 1.375rem)', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '500' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.7', fontWeight: '300' }],
        'body': ['0.9375rem', { lineHeight: '1.7', fontWeight: '300' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', fontWeight: '400' }],
        'micro': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '500' }],
      },
      animation: {
        'drift': 'drift 20s ease-in-out infinite',
        'drift-slow': 'drift 30s ease-in-out infinite reverse',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'line-draw': 'lineDraw 2s ease-out forwards',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(15px, -25px) scale(1.02)' },
          '50%': { transform: 'translate(-10px, 10px) scale(0.98)' },
          '75%': { transform: 'translate(20px, 5px) scale(1.01)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineDraw: {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};
