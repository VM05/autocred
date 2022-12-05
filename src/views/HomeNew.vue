<template>
    <Container>
      <nuevoBanner class="md:mb-5" />
      <Servicios class="mt-10 md:mt-0" />
      <ListaServicios class="my-10"/>
      <Ventajas />
      <Respaldo />
      <Experiencia />
      <Comentarios />
      <DondeEstamos />
      <Medios />
      <!-- <Simulador /> -->
      <Hablemos id="contacto" />
    </Container>
  </template>
  
  <script setup>
  import Container from "../layouts/Container.vue";
  import Servicios from "../layouts/Servicios.vue";
  import Ventajas from "../layouts/Ventajas.vue";
  import Respaldo from "../layouts/Respaldo.vue";
  import Comentarios from "../layouts/Comentarios.vue";
  import DondeEstamos from "../layouts/DondeEstamos.vue";
  import Medios from "../layouts/Medios.vue";
  import Hablemos from "../layouts/Hablemos.vue";
  import Experiencia from "../layouts/Experiencia.vue";
  import ListaServicios from "../layouts/ListaServicios.vue";
  import { useHead } from "@vueuse/head";
  
  import nuevoBanner from "../layouts/NuevoBanner.vue";
  
  useHead({
    title: "Autocred Chile tu mejor copiloto",
    meta: [
      {
        name: "description",
        content:
          "Tu mejor copiloto para la compra y venta de vehículos usados entre personas. ¡Que tu experiencia sea un gran viaje! Te acompañamos de manera presencial, online y móvil durante todo el proceso.",
      },
    ],
  });
  </script>
  
  <style scoped></style>
  