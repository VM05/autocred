<template>
  <div class="bg-black-25 grid py-12 mb-24 px-8">
    <Heading content="Pilotos que confiaron en Autocred" class="mb-16" />
    <Carousel
      :items-to-show="3"
      :wrapAround="true"
      :itemsToScroll="1"
      :autoplay="3000"
      class="mb-8"
    >
      <slide v-for="slide in comentarios" :key="slide">
        <CardComentario1 :data="slide" />
      </slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <router-link to="#contacto" class="justify-self-center w-fit">
      <Button1
        v-if="compradores"
        primary
        text="Agenda tu servicio"
        class="justify-self-center w-fit"
      />
      <Button1
        v-else
        secondary
        text="Agenda tu servicio"
        class="justify-self-center w-fit"
      />
    </router-link>
  </div>
</template>

<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Heading from "../components/Heading.vue";
import CardComentario1 from "../components/Card-Comentario.vue";
import Button1 from "../components/Button.vue";
import { comentarios } from "../assets/helpers/constants";

defineProps({
  compradores: Boolean,
});
</script>

<style>
.carousel__viewport {
  padding-bottom: 1rem;
}
li.carousel__slide {
  padding-left: 1rem;
  padding-left: 1rem;
}

.slide {
  height: 200px;
  width: 200px;
}

.carousel__slide.carousel__slide--active.carousel__slide--visible {
  transform: scale(1);
}

.carousel__slide.carousel__slide--prev,
.carousel__slide.carousel__slide--visible {
  transform: scale(0.8);
}
</style>
