<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="En Autocred te acompañamos y apoyamos en la compra de tu próximo vehículo usado."
          headingType="h2"
          class="mb-5"
        />
        <Heading
          content="Solicita tu traslado donde el comprador, obtén el mejor financiamiento, transfiere, asegura y adquiere tu TAG con nosotros."
          headingType="h4"
          class="mb-5"
        />
        <router-link to="#contacto">
          <div class="flex flex-row gap-4">
            <Button text="Quiero un copiloto" primary />
          </div>
        </router-link>
      </template>
      <template #image>
        <div class="grid place-content-center">
          <img
            src="../assets/img/portada-compradores.png"
            alt="lorem"
            class="w-full md:w-auto"
          />
        </div>
      </template>
    </BannerHome>
    <ServiciosCompradores />
    <Features />
    <Simulador />
    <Comentarios compradores />
    <Hablemos id="contacto" />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import ServiciosCompradores from "../layouts/compradores/ServiciosCompradores.vue";
import BannerHome from "../layouts/BannerHome.vue";
import Heading from "../components/Heading.vue";
import Button from "../components/Button.vue";
import Comentarios from "../layouts/Comentarios.vue";
import Hablemos from "../layouts/Hablemos.vue";
import Features from "../layouts/compradores/Features.vue";
import Simulador from "../layouts/Simulador.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Autocred | Compradores",
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
