import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F0',
        'cream-2': '#F2EDDF',
        line: '#E8E4DA',
        ink: {
          300: '#9B9387',
          500: '#6B6557',
          700: '#3D3A33',
          900: '#1A1916',
        },
        // 빗썸 brand: warm orange (digital asset trust tone)
        bithumb: {
          DEFAULT: '#F7951D',
          deep: '#E07207',
          50: '#FEF5E7',
          100: '#FCE5C2',
          300: '#F9B963',
          500: '#F7951D',
          700: '#C56F0E',
          900: '#7A4408',
        },
        // gold for subtle highlights (cepolab v2 inheritance)
        gold: {
          DEFAULT: '#C49A3A',
          deep: '#9B7825',
          50: '#FAF3E0',
          300: '#D9B86A',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '10px',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(26, 25, 22, 0.04), 0 1px 3px rgba(26, 25, 22, 0.06)',
        elevated: '0 4px 12px rgba(26, 25, 22, 0.08), 0 2px 4px rgba(26, 25, 22, 0.06)',
      },
      maxWidth: {
        '7xl': '1240px',
      },
    },
  },
  plugins: [],
};

export default config;
