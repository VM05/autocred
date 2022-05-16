<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="Te acompanamos en el proceso de venta de tu auto"
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
            <Button text="Contactanos" secondary />
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
    <ServiciosVendedores />
    <Features />
    <Simulador />
    <Comentarios />
    <div id="contacto"></div>
    <Hablemos />
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
</script>

<style scoped></style>
