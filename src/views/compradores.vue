<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="En Autocred te acompañamos y apoyamos en la compra de tu próximo vehículo usado."
          headingType="h1"
          class="mb-5 leading-tight text-sm"
        />
        <Heading
          content="Solicita tu traslado, obtén financiamiento, transfiere, asegura y habilita tu Tag con nosotros."
          headingType="h4"
          class="mb-5"
        />
        <router-link to="#simulador">
          <div class="flex flex-row gap-4">
            <Button
              text="Quiero financiar"
              primary
              id="quiero-financiar-banner"
            />
          </div>
        </router-link>
      </template>
      <template #image>
        <div class="grid place-content-center">
          <img
            src="../assets/img/portada-compradores.webp"
            alt="comprador de auto"
            class="w-full md:w-3/4 mx-auto"
            title="comprador"
          />
        </div>
      </template>
    </BannerHome>
    <ServiciosCompradores />
    <Features />
    <Simulador id="simulador" />
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
        "En Autocred te acompañamos y apoyamos en la compra de tu próximo vehículo usado. Solicita tu traslado, obtén financiamiento, transfiere, asegura y habilita tu Tag con nosotros.",
    },
  ],
});
</script>

<style scoped></style>
