<template>
  <Container>
    <Heading
      content="Diferentes soluciones para que la compra o venta de vehículos entre las personas sea un viaje extraordinario:"
      headingType="h2"
      class="mb-10 md:px-12"
    />
    <ServiciosList1 />
    <Hablemos id="contacto" />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";

import Heading from "../components/Heading.vue";

import Hablemos from "../layouts/Hablemos.vue";
import ServiciosList1 from "../layouts/ServiciosList.vue";
import { useHead } from "@vueuse/head";


useHead({
  title: "Autocred | Servicios",
  meta: [
    {
      name: "description",
      content:
        "Diferentes soluciones para que la compra o venta de vehículos entre las personas sea un viaje extraordinario: Transferencias, Financiamiento, Seguro, Tag",
    },
  ],
});
</script>

<style scoped>
#app {
  scroll-behavior: smooth;
}
</style>
