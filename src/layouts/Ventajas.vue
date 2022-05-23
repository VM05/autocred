<template>
  <div class="mb-24">
    <Heading1 content="Ventajas de viajar juntos" class="mb-4" />
    <div
      class="w-full grid-cols-1 grid md:grid-cols-3 gap-16 md:gap-8 lg:gap-32 mb-20"
    >
      <VentajaCard
        src="/img/copiloto.png"
        v-for="item in ventajas"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup>
import VentajaCard from "../components/VentajaCard.vue";
import Heading1 from "../components/Heading.vue";
import { ventajas } from "../assets/helpers/constants";
</script>

<style lang="scss" scoped></style>
