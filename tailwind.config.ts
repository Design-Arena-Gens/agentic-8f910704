import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#141414',
          border: '#2a2a2a',
          text: '#ffffff',
          'text-secondary': '#a0a0a0',
        },
        light: {
          bg: '#ffffff',
          surface: '#f5f5f5',
          border: '#e0e0e0',
          text: '#0a0a0a',
          'text-secondary': '#666666',
        }
      }
    },
  },
  plugins: [],
}
export default config
