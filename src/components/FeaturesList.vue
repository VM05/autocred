<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    <CardServicio v-for="cardData in data" :data="cardData" />
  </div>
</template>

<script setup>
import CardServicio from "./CardServicio.vue";
defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped></style>
