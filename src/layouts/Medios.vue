<template>
  <div class="mb-24 md:px-12">
    <Heading content="Autocred en Medios" class="mb-10" />
    <router-link
      class="showMore w-full justify-end items-center gap-2 mb-6 hidden md:flex"
      to="/blog"
    >
      <img src="../assets/img/flecha-medios.svg" alt="" class="h-6 w-fit" />
      <Heading content="Ver todas las apariciones" headingType="h5" secondary />
    </router-link>
    <GridNoticias />

    <router-link
      class="showMore w-full flex justify-start items-center gap-2 mb-6 mt-10 md:hidden"
      to="/blog"
    >
      <img src="../assets/img/flecha-medios.svg" alt="" class="h-6 w-fit" />
      <Heading content="Ver todas las apariciones" headingType="h5" secondary />
    </router-link>
  </div>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import GridNoticias from "../components/GridNoticias.vue";
</script>

<style lang="scss" scoped></style>
