<template>
    <div class="md:px-12">
      <div
        class="w-full grid-cols-1 grid md:grid-cols-3 md:gap-8 lg:gap-32 "
      >
        <CardVentaja
          src="/img/copiloto.png"
          v-for="item in nuevasVentajas"
          :data="item"
        />
      </div>
    </div>
  </template>
  
  <script setup>
    import Heading1 from "../components/Heading.vue";
    import { nuevasVentajas } from "../assets/helpers/constants";
    import CardVentaja from "../components/CardVentaja.vue";
  </script>
  
  <style lang="scss" scoped></style>
  