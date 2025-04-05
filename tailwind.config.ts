import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fbbf24',
        secondary: '#10B981',
        background: '#F9FAFB',
        text: '#111827',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#fbbf24',
              '&:hover': {
                color: '#f59e0b',
              },
            },
          },
        },
      },
      fontSize: {
        'title': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'subtitle': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config 