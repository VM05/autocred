<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading content="Preguntas Frecuentes" headingType="h2" class="mb-5" />
        <Heading
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          headingType="h3"
          class="mb-5"
        />
      </template>
      <template #image>
        <div class="grid place-content-center">
          <img
            src="https://picsum.photos/id/199/536/354"
            alt="lorem"
            class=""
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
