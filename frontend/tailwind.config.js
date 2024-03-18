/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#455a64',
        'light-bg':'#f1ece8',
        'primary-yellow': '#f5b754',
      },
      keyframes: {
        'fadeRight': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fadeLeft': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fadeUp': {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeDown': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

      },
      animation: {
        'fadeRight': 'fadeRight 0.5s ease-in-out',
        'fadeLeft': 'fadeLeft 0.5s ease-in-out',
        'fadeUp': 'fadeUp 0.5s ease-in-out',
        'fadeDown': 'fadeDown 0.5s ease-in-out',
      },
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

