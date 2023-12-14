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
          'base-100': '#121612',
          info: '#0089ff',
          success: '#1dffba',
          warning: '#f7c400',
          error: '#ce2854',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
