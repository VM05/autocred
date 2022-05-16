<template>
  <Heading1
    content="Descubre la experiencia de nuestro ultimo piloto"
    class="mb-14"
  />
  <div class="grid justify-between mb-24">
    <CardExperiencia1 />
    <Video src="/assets/video/lorem.mp4" height="100%" controls />
  </div>
</template>

<script setup>
import Video from "../components/Video.vue";
import CardExperiencia1 from "../components/CardExperiencia.vue";
import Heading1 from "../components/Heading.vue";
</script>

<style scoped>
.grid {
  grid-template-columns: 0.4fr 1fr;
  gap: 4rem;
}
</style>
