import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import typographyPlugin from '@tailwindcss/typography'

export default {
  content: ['./**/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, Avenir, 'Avenir Next LT Pro', Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif",
      },
      fontSize: {
        icon: '0.8rem',
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'inner-xs': 'inset 0 1px 1px 0 rgb(0 0 0 / 0.1)',
      },
      colors: {
        slate: {
          '50': '#fafbfc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1F2A3B',
          '900': '#19212F',
          '950': '#141821',
        },
        blue: {
          DEFAULT: '#2fb1f0',
          '50': '#f1f9fe',
          '100': '#e1f1fd',
          '200': '#bce4fb',
          '300': '#82cff7',
          '400': '#2fb1f0',
          '500': '#169ee1',
          '600': '#097ec0',
          '700': '#09649b',
          '800': '#0b5681',
          '900': '#0f476b',
          '950': '#0a2e47',
        },
        teal: {
          DEFAULT: '#06a0b5',
          '50': '#ecffff',
          '100': '#cefeff',
          '200': '#a4fbfd',
          '300': '#65f4fb',
          '400': '#20e4f0',
          '500': '#04c8d6',
          '600': '#06a0b5',
          '700': '#0c7f92',
          '800': '#146676',
          '900': '#155464',
          '950': '#073845',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in':
          'fade-in 500ms ease-in-out var(--animation-delay, 0ms) forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('disabled', '&:is(:disabled, [data-disabled])')
      addVariant('group-disabled', '.group:is(:disabled, [data-disabled]) &')
      addVariant(
        'not-disabled',
        '&:where(:not(:disabled):not([data-disabled]))',
      )
      addVariant(
        'group-not-disabled',
        '.group:where(:not(:disabled):not([data-disabled]))&',
      )
    }),
    typographyPlugin,
  ],
} satisfies Config
