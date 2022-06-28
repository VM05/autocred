<template>
  <div class="grid gap-12 w-full">
    <Noticia v-for="(item, index) in 1" :data="posts[index]" :indice="index" />
  </div>
</template>

<script setup>
import Noticia from "../components/Noticia.vue";
import { posts } from "../assets/helpers/constants";
</script>

<style scoped>
.grid {
  grid-template-columns: 1.5fr 1fr 1fr;
}
@media screen and (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
