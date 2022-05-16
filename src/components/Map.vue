<template>
  <GoogleMap
    api-key="AIzaSyBSwi5kLyEdIzWoTO7qmOd955qx3x-6rAY"
    style="width: 100%; height: 100%"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: -33.409364, lng: -70.5801154 };

    return { center };
  },
});
</script>
