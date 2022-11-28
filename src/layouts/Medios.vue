<template>
  <div class="mb-24 md:px-12">
    <Heading content="Autocred en Medios" class="mb-10" />
    <router-link
      class="showMore w-full justify-end items-center gap-2 mb-6 hidden md:flex"
      to="/blog"
    >
      <img src="../assets/img/flecha-medios.svg" alt="" class="h-6 w-fit" />
      <Paragraph color class="font-semibold text-lg">
        Ver Todas las apariciones
      </Paragraph>
    </router-link>
    <GridNoticias />

    <router-link
      class="showMore w-full flex justify-start items-center gap-2 mb-6 mt-10 md:hidden"
      to="/blog"
    >
      <img src="../assets/img/flecha-medios.svg" alt="" class="h-6 w-fit" />
      
      <Paragraph color class="font-semibold text-lg">
        Ver Todas las apariciones
      </Paragraph>
    </router-link>
  </div>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import GridNoticias from "../components/GridNoticias.vue";
import Paragraph from "../components/Paragraph.vue";
</script>

<style lang="scss" scoped></style>
