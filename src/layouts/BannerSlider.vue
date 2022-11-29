<template>
  <Carousel
    :items-to-show="1"
    :itemsToScroll="1"
    :autoplay="8000"
    :wrap-around="true"
    pauseAutoplayOnHover="true"
  >
    <slide v-for="(datos, index) in datosBannerPrincipal" :key="datos">
      <div
        class="w-full flex flex-col-reverse md:flex-row mx-auto md:px-12 md:gap-10"
      >
        <div class="md:w-1/2 text-left">
          <Heading
            :content="datos.titulo"
            :headingType="index == '0' ? 'h1' : 'h2'"
            secondary
          />
          <Heading
            :content="datos.content"
            headingType="h2"
            class="mb-5 mt-3"
            primary
          />

          <div class="flex flex-col md:flex-row md:gap-4 gap-2 mt-10">
            <router-link to="/servicios/financiamiento">
              <Button text="Financiamiento" secondary id="quiero-vender" />
            </router-link>
            <router-link to="/servicios/transferencias">
              <Button text="Transferencia" primary id="quiero-comprar" />
            </router-link>
          </div>

          <!-- <Button
            secondary
            :text="datos.buttonText"
            class="mt-10 outline-0"
            id="angedar-servicio-compradores"
          /> -->
        </div>
        <div class="md:w-1/2 mb-4 md:mb-0 flex justify-center align-middle">
          <video v-if="datos.tipo == 'video'" autoplay loop  playsinline muted>
            <source
              :src="datos.img"
              type="video/mp4"
              width="400"
              height="300"
            />
            Your browser does not support the video tag.
          </video>
          <img v-else :src="datos.img" alt="servicios autocred" />
        </div>
      </div>
    </slide>
    <template #addons class="hidden md:block">
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Heading from "../components/Heading.vue";
import Button from "../components/Button.vue";
import { datosBannerPrincipal } from "../assets/helpers/constants";
</script>

<style scoped>
.carousel {
  max-height: 550px;
}
.carousel__slide {
  max-height: 550px;
}

@media (min-width: 768px) {
  .carousel__slide {
    max-height: 350px;
  }
}

.carousel__pagination {
  margin-top: 50px;
}

img {
  height: 100%;
  width: 100%;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: none;
  min-width: 370px;
}

video {
  border: none;
}
</style>
