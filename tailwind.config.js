/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030305',
          900: '#09090f',
          800: '#0f0f1a',
          700: '#161625',
          600: '#1e1e30',
          500: '#2a2a40',
        },
        gold: {
          50: '#fffef5',
          100: '#fff9d6',
          200: '#fff0a3',
          300: '#ffe066',
          400: '#ffd030',
          500: '#f5b800',
          600: '#d49a00',
          700: '#a67600',
          800: '#7a5700',
          900: '#4f3800',
        },
        accent: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern':
          'linear-gradient(135deg, #09090f 0%, #1e1e30 50%, #09090f 100%)',
        'gold-shimmer':
          'linear-gradient(110deg, #d49a00 0%, #ffe066 25%, #f5b800 50%, #ffe066 75%, #d49a00 100%)',
      },
      animation: {
        shimmer: 'shimmer 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(245, 184, 0, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(245, 184, 0, 0.3)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
