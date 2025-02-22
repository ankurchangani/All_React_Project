export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', 
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1a1a1a', 
        'custom-light': '#f9f9f9',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to right, #ffffff, #f9f9f9)',
        'gradient-dark': 'linear-gradient(to right, #121212, #1a1a1a)',
        'header-gradient': 'linear-gradient(0deg, #612691 3%, #000000 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out', 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
