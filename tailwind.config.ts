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
        'cream-3': '#FAF9F7',
        line: '#E8E4DA',
        'line-soft': '#F0EBE0',
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
          200: '#FBEAE7',
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
          100: '#F5E8C8',
          300: '#D9B86A',
        },
        // accent light tints inherited from cepolab v2 design language
        accent: {
          'blue-light': '#F0F4FF',
          'blue': '#5B6ABF',
          'coral-light': '#FBEAE7',
          'coral': '#C4503A',
          'mint-light': '#E6F4ED',
          'mint': '#1F8A55',
          'plum-light': '#F7EBF0',
          'plum': '#BF5B7C',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'sans-serif',
        ],
      },
      fontSize: {
        '2xs': '10px',
        '3xs': '9px',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(26, 25, 22, 0.04), 0 1px 3px rgba(26, 25, 22, 0.06)',
        elevated: '0 4px 12px rgba(26, 25, 22, 0.08), 0 2px 4px rgba(26, 25, 22, 0.06)',
        soft: '0 2px 8px rgba(26, 25, 22, 0.05)',
        glow: '0 8px 24px rgba(247, 149, 29, 0.18), 0 2px 8px rgba(247, 149, 29, 0.12)',
        inset: 'inset 0 1px 2px rgba(26, 25, 22, 0.04)',
      },
      maxWidth: {
        '7xl': '1240px',
      },
      letterSpacing: {
        widest2: '0.22em',
        widest3: '0.28em',
      },
    },
  },
  plugins: [],
};

export default config;
