// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  app: {
    title: 'Nuxt.js + TypeScript example',
    head: {
      script: [
        {
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB0-YrPftaUSJeCKg91ItYoS843m03ohic&callback=initMap',
          async: true,
          defer: true,
        },
      ],
    },
  },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/assets/css/main.css'],
  modules: [
    'nuxt-aos',
  ],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      },
  },
  
  build: {
    transpile: ['@googlemaps/js-api-loader'],
  },
  
  

})
