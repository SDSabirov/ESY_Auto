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
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

