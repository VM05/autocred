<template>
  <div class="grid gap-12 w-full">
    <Noticia v-for="(item, index) in 3" :data="posts[index]" :indice="index" />
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

:deep(.noticia-grid:nth-child(2) .imagen-noticia img) {
  height: 200px;
}

:deep(.noticia-grid:nth-child(3) .imagen-noticia img) {
  height: 200px;
}

@media screen and (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
