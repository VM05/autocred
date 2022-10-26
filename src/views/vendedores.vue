<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="Somos tu copiloto en la venta de tu vehículo"
          headingType="h1"
          class="mb-5 leading-tight"
        />
        <Heading
          content="Publica y vende sin contratiempos ni intermediarios. Elige una plataforma de venta y obtén siempre el mejor valor."
          headingType="h4"
          class="mb-5"
        />
        <router-link to="#contacto">
          <div class="flex flex-row gap-4">
            <Button
              text="Agenda tu servicio"
              secondary
              id="agendar-servicio-banner"
            />
          </div>
        </router-link>
      </template>
      <template #image>
        <div class="grid place-content-center">
          <img
            src="../assets/img/portada-vendedores.png"
            alt="lorem"
            class="w-full md:w-3/4 mx-auto"
          />
        </div>
      </template>
    </BannerHome>
    <ServiciosVendedores />
    <Hablemos id="contacto" />
    <Comentarios />
    <Features />
    <Simulador id="simulador" />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import ServiciosVendedores from "../layouts/vendedores/ServiciosVendedores.vue";
import BannerHome from "../layouts/BannerHome.vue";
import Heading from "../components/Heading.vue";
import Button from "../components/Button.vue";
import Comentarios from "../layouts/Comentarios.vue";
import Hablemos from "../layouts/Hablemos.vue";
import Features from "../layouts/vendedores/Features.vue";
import Simulador from "../layouts/Simulador.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Autocred | Vendedores",
  meta: [
    {
      name: "description",
      content:
        "Somos tu copiloto en la venta de tu vehículo. Publica y vende sin contratiempos ni intermediarios. Elige una plataforma de venta y obtén siempre el mejor valor.",
    },
  ],
});
</script>

<style scoped></style>
