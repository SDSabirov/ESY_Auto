<template>
    <div 
       data-aos="fade-left"
      data-aos-duration="1200"
      class=" h-[400px] w-full md:h-[500px] md:w-full rounded-lg" id="map">
    </div>
</template>

<script>
export default {

  data() {
    return {
      map: null,
    };
  },
  methods: {
    initMap() {
        
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.63945365919564, lng: -1.1546919336596688 },
        zoom: 9.5,
        zoomControl: true,
      });
      const serviceArea = new google.maps.Circle({
        strokeColor: '#1d427d',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#3273a8',
        fillOpacity: 0.4,
        map: this.map,
        center: { lat: 52.63945365919564, lng: -1.1546919336596688 },
        //radius 18 miles
        radius: 28968.2,
      });
    },
  },
  mounted() {
    // Ensure that the initMap method is called when the Google Maps API script is loaded
    window.initMap = this.initMap;
    
  // Check if the Google Maps API script is already loaded
    if (typeof google !== 'undefined') {
    // If it's already loaded, directly call initMap
    this.initMap();
    }
  },
}

</script>
