import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card-background)',
          foreground: 'var(--foreground)',
        },
        primary: {
          DEFAULT: 'var(--theme-color)',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: 'var(--background-adjacent-color)',
          foreground: 'var(--foreground)',
        },
        muted: {
          DEFAULT: 'var(--checkbox-background)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--theme-purple)',
          foreground: '#ffffff',
        },
        border: 'var(--border-color)',
        input: 'var(--checkbox-background)',
        ring: 'var(--theme-color)',
      },
      borderRadius: {
        lg: 'var(--outer-card-radius)',
        md: 'var(--moderate-rounding)',
        sm: 'var(--general-rounding)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
