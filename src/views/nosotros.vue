<template>
  <Container>
    <BannerHome>
      <template #content>
        <Heading
          content="Hacer un buen negocio es un camino en que muchos se pierden. Para llegar a destino, confia en un coopiloto experto"
          headingType="h2"
          class="mb-5"
        />
        <Heading
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
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
            src="https://picsum.photos/id/199/536/354"
            alt="lorem"
            class=""
          />
        </div>
      </template>
    </BannerHome>
    <NuestroRecorrido />
    <Valores />
    <Servicios />
    <Comentarios />
    <Respaldo />
    <Hablemos id="#contacto" />
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
</script>

<style scoped></style>
