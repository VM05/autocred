<template>
  <div class="flex flex-col md:grid py-6 md:py-12 mb-24">
    <Heading
      content="Que dicen nuestros clientes"
      class="mb-8 md:mb-16 md:px-12"
      highlight="clientes"
      highlight-img="confiaron"
    />
    <Carousel
      :items-to-show="1"
      :wrapAround="true"
      :itemsToScroll="1"
      :autoplay="5000"
      class="mb-8"
      :breakpoints="breakpoints"
    >
      <slide v-for="slide in comentarios" :key="slide">
        <CardComentario1 :data="slide" />
      </slide>
      <template #addons class="hidden md:block">
        <Navigation />
      </template>
    </Carousel>
    <router-link to="#contacto" class="justify-self-center w-fit self-center">
      <Button1
        v-if="compradores"
        primary
        text="Agenda tu servicio"
        class="justify-self-center w-fit"
        id="angedar-servicio-compradores"
      />
      <Button1
        v-else
        secondary
        text="Agenda tu servicio"
        class="justify-self-center w-fit mx-auto"
        id="agendar-servicio"
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

const breakpoints = {
  700: {
    itemsToShow: 3,
    autoplay: 0,
  },
};

defineProps({
  compradores: Boolean,
});
</script>

<style>
li.carousel__slide {
  /* padding-left: 1rem;
  padding-right: 1rem; */
  padding: 10px;
}

button.carousel__pagination-button {
  background-color: #ba0b7d4f;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

button.carousel__pagination-button.carousel__pagination-button--active {
  background-color: #ba0b7c;
}

@media (min-width: 768px) {
  .carousel__viewport {
    padding-bottom: 1rem;
  }
  li.carousel__slide {
    padding-left: 1rem;
    padding-right: 1rem;
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

  .carousel__icon {
    color: #ba0b7c;
  }
}
</style>
