<template>
  <Heading1
    content="Casos de éxito"
    class="mb-14 md:px-12"
   
  />
  <div class="grid justify-between mb-24 md:px-12">
    <CardExperiencia1 class="mb-8 md:mb-0" />
    <div>
      <video
        :width="width"
        :height="height"
        :controls="true"
        :autoplay="true"
        muted
        class="rounded-3xl"
      >
        <source
          src="../assets/video/Autocred-PedroEngel.mp4"
          type="video/mp4"
        />
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
@media (min-width: 768px) {
  .grid {
    grid-template-columns: 0.5fr 1fr;
    gap: 4rem;
  }
}
</style>
