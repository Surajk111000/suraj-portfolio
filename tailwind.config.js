/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFFFF',
          primary: '#7C3AED',
          secondary: '#2563EB',
          accent: '#A78BFA',
          text: '#1F2937',
          card: '#F9FAFB',
          dark: {
            bg: '#0F172A',
            primary: '#8B5CF6',
            secondary: '#3B82F6',
            accent: '#C4B5FD',
            text: '#E5E7EB',
            card: '#1E293B'
          }
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(37, 99, 235, 0.12)'
      }
    }
  },
  plugins: []
}

