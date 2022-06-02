<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="Tu mejor copiloto para la compra y venta de vehículos usados entre personas"
          headingType="h1"
          class="mb-5"
        />
        <Heading
          content="¡Que tu experiencia sea un gran viaje!"
          headingType="h3"
          class="mb-5"
        />
        <Heading
          content="Te acompañamos de manera presencial, online y móvil durante todo el proceso."
          headingType="h4"
          class="mb-5"
        />
        <div>
          <!-- <Heading
            content="¿En que viaje te guiamos?"
            headingType="h4"
            class="mb-3"
          /> -->
          <div class="flex flex-col md:flex-row md:gap-4 gap-2">
            <router-link to="/vendedores">
              <Button text="Quiero vender" secondary />
            </router-link>
            <router-link to="/compradores">
              <Button text="Quiero comprar" primary />
            </router-link>
          </div>
        </div>
      </template>
      <template #image>
        <div class="grid place-content-center h-full">
          <!-- <img
            src="../assets/img/home_header.png"
            alt="lorem"
            class="w-full md:w-auto"
          /> -->
          <video
            autoplay
            controls
            muted
            src="../assets/video/promo.mp4"
            class="w-full md:w-auto rounded-3xl"
          ></video>
        </div>
      </template>
    </BannerHome>
    <Ventajas />
    <Servicios />
    <Respaldo />
    <!-- <Experiencia /> -->
    <Comentarios />
    <DondeEstamos />
    <!-- <Medios /> -->
    <Hablemos id="contacto" />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Servicios from "../layouts/Servicios.vue";
import BannerHome from "../layouts/BannerHome.vue";
import Ventajas from "../layouts/Ventajas.vue";
import Respaldo from "../layouts/Respaldo.vue";
import Heading from "../components/Heading.vue";
import Button from "../components/Button.vue";
import Comentarios from "../layouts/Comentarios.vue";
import DondeEstamos from "../layouts/DondeEstamos.vue";
// import Medios from "../layouts/Medios.vue";
import Hablemos from "../layouts/Hablemos.vue";
// import Experiencia from "../layouts/Experiencia.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Autocred Chile tu mejor copiloto",
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
