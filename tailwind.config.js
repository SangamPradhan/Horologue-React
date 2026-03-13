/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#C5A059", // Luxury Gold 
        "luxury-gold": "#C5A059",
        "accent-gold": "#C5A059",
        "background-light": "#ffffff",
        "background-dark": "rgb(1 3 10)",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "serif": ["Cormorant Garamond", "serif"],
        "accent": ["Outfit", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
