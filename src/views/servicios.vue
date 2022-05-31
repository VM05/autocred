<template>
  <Container>
    <Heading
      content="¡Contamos con diferentes soluciones para hacer de la compra o venta entre personas un viaje extraordinario!"
      headingType="h2"
      class="mb-5"
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
        "Autocred lo hace fácil. Postula simultáneamente tu crédito con diferentes crediticias y obtén una aprobación en segundos",
    },
  ],
});
</script>

<style scoped></style>
