import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        gold: 'rgb(var(--gold) / <alpha-value>)',
        sand: 'rgb(var(--sand) / <alpha-value>)',
        charcoal: 'rgb(var(--charcoal) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(190, 152, 72, 0.15)',
        soft: '0 12px 40px rgba(15, 23, 42, 0.08)'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'sans-serif']
      },
      backgroundImage: {
        dune: 'linear-gradient(135deg, rgba(229, 215, 189, 0.85), rgba(255,255,255,0.55))',
        night: 'radial-gradient(circle at top, rgba(190,152,72,0.18), transparent 40%), linear-gradient(135deg, rgba(15,15,19,1), rgba(38,33,28,1))'
      }
    }
  },
  plugins: []
} satisfies Config;
