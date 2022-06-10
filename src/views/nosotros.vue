<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="Si tu destino es hacer un buen negocio, confía en un copiloto experto."
          headingType="h2"
          class="mb-5"
        />
        <Heading
          content="Estamos disponibles los 7 días de la semana para que la compra o venta entre personas de cualquier vehículo usado, sea un viaje extraordinario."
          headingType="h3"
          class="mb-5"
        />
        <router-link to="#contacto">
          <div class="flex flex-row gap-4">
            <Button text="Viajemos juntos" secondary />
          </div>
        </router-link>
      </template>
      <template #image>
        <div class="grid place-content-center">
          <img
            src="../assets/img/portada-nosotros.png"
            alt="lorem"
            class="w-full md:w-3/4 mx-auto"
          />
        </div>
      </template>
    </BannerHome>
    <NuestroRecorrido />
    <Valores />
    <Servicios />
    <Comentarios />
    <Respaldo />
    <Hablemos id="contacto" />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Servicios from "../layouts/Servicios.vue";
import BannerHome from "../layouts/BannerHome.vue";
import Respaldo from "../layouts/Respaldo.vue";
import Heading from "../components/Heading.vue";
import Button from "../components/Button.vue";
import Comentarios from "../layouts/Comentarios.vue";
import Hablemos from "../layouts/Hablemos.vue";
import NuestroRecorrido from "../layouts/nosotros/NuestroRecorrido.vue";
import Valores from "../layouts/nosotros/Valores.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Autocred | Nosotros",
  meta: [
    {
      name: "description",
      content:
        "Si tu destino es hacer un buen negocio, confía en un copiloto experto. Estamos disponibles los 7 días de la semana para que la compra o venta entre personas de cualquier vehículo usado, sea un viaje extraordinario.",
    },
  ],
});
</script>

<style scoped></style>
