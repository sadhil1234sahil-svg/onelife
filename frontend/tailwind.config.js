/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#141210',
          darker: '#0c0a09',
          card: '#1f1c19',
          lime: '#bbf451',
          limeHover: '#a6e23b',
          limeLight: '#e4f9b8',
          sand: '#fcfaf6',
          cream: '#f8f4ec',
          orange: '#ff6b00',
          orangeHover: '#e65900',
          orangeBright: '#ff7a00',
          orangeLight: '#fff2e8',
          warmGray: '#8f8880'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

