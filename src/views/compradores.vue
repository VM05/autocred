<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="Te acompanamos en la compra de tu proximo auto"
          headingType="h2"
          class="mb-5"
        />
        <Heading
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          headingType="h4"
          class="mb-5"
        />
        <a href="#contacto">
          <div class="flex flex-row gap-4">
            <Button text="Contactanos" primary />
          </div>
        </a>
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
</script>

<style scoped></style>
