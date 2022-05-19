<template>
  <Heading1
    content="Descubre la experiencia de nuestro ultimo piloto"
    class="mb-14"
  />
  <div class="grid justify-between mb-24">
    <CardExperiencia1 />
    <div>
      <video
        :width="width"
        :height="height"
        :controls="true"
        :autoplay="true"
        muted
        loop
        class="rounded-3xl"
      >
        <source src="../assets/video/lorem.mp4" type="video/mp4" />
      </video>
    </div>
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
