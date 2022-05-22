<template>
  <div class="grid">
    <div
      class="grid gap-4 w-full md:w-3/5"
      :class="[right ? 'justify-self-end' : 'justify-self-start']"
    >
      <CardServicio v-for="cardData in data" :data="cardData" />
    </div>
  </div>
</template>

<script setup>
import CardServicio from "./CardServicio.vue";
defineProps({
  data: Array,
  right: Boolean,
});
</script>

<style lang="scss" scoped></style>
