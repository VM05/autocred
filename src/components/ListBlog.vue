<template>
  <div class="grid gap-12 w-full md:grid-cols-3">
    <div v-for="(item, index) in posts" class="noticia">
      <Noticia :indice="index" :data="item" />
    </div>
  </div>
</template>

<script setup>
import Noticia from "./Noticia.vue";
import { posts } from "../assets/helpers/constants";
</script>

<style>
@media (min-width: 768px) {
  .noticia:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .noticia:nth-child(1) img {
    height: 350px;
  }
}
</style>
