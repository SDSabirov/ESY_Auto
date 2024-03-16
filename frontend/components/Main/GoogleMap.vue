<template>
    <div id="map" >
        
    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';


let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 52.63945365919564, lng: -1.1546919336596688 },
    zoom: 9.5,
    zoomControl: true,
  });
  const serviceArea = new google.maps.Circle({
    strokeColor: "#1d427d",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#3273a8",
    fillOpacity: 0.4,
    map,
    center: { lat: 52.63945365919564, lng: -1.1546919336596688 },
    //radius 18 miles
    radius: 28968.2,
  });
}

onMounted(() => {
    const loader = new Loader({
        apiKey: 'AIzaSyB0-YrPftaUSJeCKg91ItYoS843m03ohic',
        version: "weekly",
        libraries: ["places"]
    });

    loader.loadCallback(() => {
        initMap();
    });
});
</script>

<style scoped>
    #map {
        height: 100%;
        width: 100%;
    }
</style>