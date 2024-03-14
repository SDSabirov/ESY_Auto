import Vue from 'vue';
import VueGoogleMaps from 'vue3-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_KEY',
    libraries: 'places',
  },
});