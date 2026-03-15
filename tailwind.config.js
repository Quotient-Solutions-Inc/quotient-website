/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          black: '#000000',
          gray: '#D9D9D9',
          blue: '#3598E6',
          'red-orange': '#F35B28',
          lavender: '#C596FE',
          'pale-blue': '#A6CEE3',
          chartreuse: '#F7FF86',
        },
        border: {
          thin: '#D0D0D0',
          heavy: '#0A0A0A',
        },
        surface: {
          light: '#F4F4F4',
          off: '#FAFAF8',
        },
      },
      fontFamily: {
        headline: ['var(--font-newsreader)', 'Georgia', 'serif'],
        mono: ['var(--font-dm-mono)', "'Courier New'", 'monospace'],
        body: ['var(--font-inter)', 'Helvetica', 'sans-serif'],
        wordmark: ['var(--font-instrument-sans)', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.1em',
      },
      maxWidth: {
        content: '1080px',
        prose: '800px',
      },
    },
  },
  plugins: [],
}
