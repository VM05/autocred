<template>
  <div class="grid relative">
    <div
      class="grid gap-4 w-full md:w-2/3 z-10"
      :class="[right ? 'justify-self-end' : 'justify-self-start']"
    >
      <CardServicio v-for="cardData in data" :data="cardData" />
    </div>
    <img
      src="../assets/img/armado-vendedores.png"
      alt=""
      class="img absolute top-0 left-0 z-0"
      v-if="right"
    />
    <img
      src="../assets/img/armado-compradores.png"
      alt=""
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
});
</script>

<style scoped>
@media (min-width: 768px) {
  .img {
    width: 37%;
  }
}
</style>
