import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        darkTheme: {
          primary: '#55d44c',
          secondary: '#4059ad',
          accent: '#cc3f0c',
          neutral: '#252d2a',
          'base-100': '#161b19',
          'base-200': '#121612',
          'base-300': '#0f1211',
          info: '#0089ff',
          success: '#1dffba',
          warning: '#f7c400',
          error: '#ce2854',
        },
        lightTheme: {
          primary: '#55d44c',
          secondary: '#4059ad',
          accent: '#cc3f0c',
          neutral: '#dde3e1',
          'base-100': '#f4f6f5',
          'base-200': '#dde3dd',
          'base-300': '#c7d1c7',
          info: '#0089ff',
          success: '#1dffba',
          warning: '#f7c400',
          error: '#ce2854',
        },
      },
    ],
  },
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
      colors: {
        lime_green: {
          DEFAULT: '#55d44c',
          100: '#0d2e0b',
          200: '#1b5c16',
          300: '#288a21',
          400: '#36b82d',
          500: '#55d44c',
          600: '#76dc6e',
          700: '#98e593',
          800: '#baedb7',
          900: '#ddf6db',
        },
        sapphire: {
          DEFAULT: '#4059ad',
          100: '#0d1222',
          200: '#192345',
          300: '#263567',
          400: '#334789',
          500: '#4059ad',
          600: '#5e76c4',
          700: '#8698d2',
          800: '#afbae1',
          900: '#d7ddf0',
        },
        sinopia: {
          DEFAULT: '#cc3f0c',
          100: '#280d02',
          200: '#511905',
          300: '#792607',
          400: '#a23209',
          500: '#cc3f0c',
          600: '#f2581f',
          700: '#f58157',
          800: '#f8ab8f',
          900: '#fcd5c7',
        },
        night: {
          DEFAULT: '#121612',
          100: '#040404',
          200: '#070907',
          300: '#0b0d0b',
          400: '#0f120f',
          500: '#121612',
          600: '#3d4a3d',
          700: '#677e67',
          800: '#98ab98',
          900: '#cbd5cb',
        },
        gunmetal: {
          DEFAULT: '#252d2a',
          100: '#070908',
          200: '#0f1211',
          300: '#161b19',
          400: '#1d2421',
          500: '#252d2a',
          600: '#4b5c56',
          700: '#728b81',
          800: '#a1b2ab',
          900: '#d0d8d5',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
