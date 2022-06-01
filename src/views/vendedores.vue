<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="Te acompañamos en el proceso de venta de tu auto"
          headingType="h2"
          class="mb-5"
        />
        <Heading
          content="Publica y vende a través de la plataforma que prefieras, nosotros te acompañamos para vender lo antes posible sin contratiempos ni intermediarios. Obtén siempre el mejor valor por tu vehículo."
          headingType="h4"
          class="mb-5"
        />
        <router-link to="#contacto">
          <div class="flex flex-row gap-4">
            <Button text="Agenda tu servicio" secondary />
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
    <Simulador />
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
        "Autocred lo hace fácil. Postula simultáneamente tu crédito con diferentes crediticias y obtén una aprobación en segundos",
    },
  ],
});
</script>

<style scoped></style>
