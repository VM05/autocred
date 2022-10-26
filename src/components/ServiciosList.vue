<template>
  <div class="grid relative">
    <div
      class="grid gap-8 w-full md:w-2/3 z-10"
      :class="[right ? 'justify-self-end' : 'justify-self-start']"
    >
      <CardServicio
        v-for="cardData in data"
        :data="cardData"
        :servicio="servicio"
      />
    </div>
    <img
      src="../assets/img/armado-vendedores.webp"
      alt="servicio para vendedores"
      class="img absolute top-0 left-0 z-0"
      v-if="right"
    />
    <img
      src="../assets/img/armado-compradores.webp"
      alt="servicio para compradores"
      class="img absolute top-0 right-0 z-0 md"
      v-if="!right"
    />
  </div>
</template>

<script setup>
import CardServicio from "./CardServicio.vue";
defineProps({
  data: Array,
  right: Boolean,
  servicio: String,
});
</script>

<style scoped>
@media (min-width: 768px) {
  .img {
    width: 37%;
  }
}
</style>
