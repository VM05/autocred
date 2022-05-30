<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading content="Preguntas Frecuentes" headingType="h2" class="mb-5" />
        <Heading
          content="En Autocred te guiamos en todo el proceso de la compra o venta de tu vehículo junto a nuestros copilotos."
          headingType="h3"
          class="mb-5"
        />
      </template>
      <template #image>
        <div class="grid place-content-center">
          <img
            src="../assets/img/portada-preguntas-frecuentes.png"
            alt="lorem"
            class="w-full md:w-auto"
          />
        </div>
      </template>
    </BannerHome>
    <PreguntasList vendedor secondary />
    <PreguntasList comprador primary />
    <Hablemos id="contacto" />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import BannerHome from "../layouts/BannerHome.vue";
import Heading from "../components/Heading.vue";
import Button from "../components/Button.vue";
import Hablemos from "../layouts/Hablemos.vue";
import PreguntasList from "../layouts/preguntas/PreguntasList.vue";
</script>

<style scoped></style>
