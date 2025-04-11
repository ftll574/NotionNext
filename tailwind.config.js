const BLOG = require('./blog.config')
const { fontFamilies } = require('./lib/font')

module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './themes/**/*.js'
  ],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    screens: {
      sm: '540px',
      // => @media (min-width: 576px) { ... }
      md: '720px',
      // => @media (min-width: 768px) { ... }
      lg: '960px',
      // => @media (min-width: 992px) { ... }
      xl: '1140px',
      // => @media (min-width: 1200px) { ... }
      '2xl': '1536px'
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#111827'
        },
        hexo: {
          'background-gray': '#f5f5f5',
          'black-gray': '#101414',
          'light-gray': '#e5e5e5'
        },
        // black: '#212b36',
        'dark-700': '#090e34b3',
        dark: {
          DEFAULT: '#111928',
          2: '#1F2A37',
          3: '#374151',
          4: '#4B5563',
          5: '#6B7280',
          6: '#9CA3AF',
          7: '#D1D5DB',
          8: '#E5E7EB'
        },
        primary: {
          DEFAULT: '#00629B',
          50: '#E0F4FF',
          100: '#CCE9FF',
          200: '#99D3FF',
          300: '#66BDFF',
          400: '#33A7FF',
          500: '#0091FF',
          600: '#0076CC',
          700: '#005C99',
          800: '#004A76',
          900: '#003353'
        },
        secondary: {
          DEFAULT: '#FF7E00',
          50: '#FFF2E0',
          100: '#FFE5CC',
          200: '#FFCB99',
          300: '#FFB266',
          400: '#FF9833',
          500: '#FF7E00',
          600: '#CC6500',
          700: '#994C00',
          800: '#663300',
          900: '#331A00'
        },
        'blue-dark': '#004A76',
        'body-color': '#637381',
        'body-secondary': '#8899A8',
        warning: '#FBBF24',
        success: '#10B981',
        info: '#3B82F6',
        danger: '#EF4444',
        stroke: '#DFE4EA',
        'gray-1': '#F9FAFB',
        'gray-2': '#F3F4F6',
        'gray-3': '#E5E7EB',
        'gray-4': '#D1D5DB',
        'gray-5': '#9CA3AF',
        'gray-6': '#6B7280',
        'gray-7': '#4B5563',
        'gray-8': '#374151',
        'gray-9': '#1F2937',
      },
      maxWidth: {
        side: '14rem',
        '9/10': '90%',
        'screen-3xl': '1440px',
        'screen-4xl': '1560px'
      },
      boxShadow: {
        input: '0px 7px 20px rgba(0, 0, 0, 0.03)',
        form: '0px 1px 55px -11px rgba(0, 0, 0, 0.01)',
        pricing: '0px 0px 40px 0px rgba(0, 0, 0, 0.08)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        testimonial: '0px 10px 20px 0px rgba(92, 115, 160, 0.07)',
        'testimonial-btn': '0px 8px 15px 0px rgba(72, 72, 138, 0.08)',
        card: '0 10px 30px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 15px 35px rgba(0, 0, 0, 0.12)',
        1: '0px 1px 3px 0px rgba(166, 175, 195, 0.40)',
        2: '0px 5px 12px 0px rgba(0, 0, 0, 0.10)'
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary-light': '#0096db',
      }),
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      fontSize: {
        'xs': '0.875rem',
        'sm': '1rem',
        'base': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.375rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #00629B, #0096db)',
        'gradient-secondary': 'linear-gradient(90deg, #FF7E00, #FFAB33)',
        'gradient-blue': 'linear-gradient(135deg, #00629B 0%, #004A76 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF7E00 0%, #CC6500 100%)',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
