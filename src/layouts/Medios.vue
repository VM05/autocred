<template>
  <div class="mb-24">
    <Heading content="Autocred en Medios" />
    <router-link
      class="showMore w-full flex justify-end items-center gap-2 mb-6"
      to="/blog"
    >
      <img src="../assets/img/flecha-medios.svg" alt="" class="h-6 w-fit" />
      <Heading content="Ver todas las apariciones" headingType="h5" secondary />
    </router-link>
    <GridNoticias />
  </div>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import GridNoticias from "../components/GridNoticias.vue";
</script>

<style lang="scss" scoped></style>
