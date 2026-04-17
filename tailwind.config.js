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
          0: '#09090b',
          1: '#111114',
          2: '#18181c',
          3: '#222228',
          4: '#2c2c34',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.14)',
        },
        accent: {
          DEFAULT: '#34d399',
          muted: '#2ab883',
        },
        steel: {
          DEFAULT: '#60a5fa',
        },
      },
      fontSize: {
        'display': ['clamp(2.75rem, 5.5vw, 5rem)', { lineHeight: '1.06', letterSpacing: '-0.03em', fontWeight: '700' }],
        'h1': ['clamp(1.875rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '600' }],
        'h2': ['clamp(1.25rem, 2vw, 1.625rem)', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3': ['1.0625rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body': ['0.9375rem', { lineHeight: '1.7', fontWeight: '400' }],
        'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};
