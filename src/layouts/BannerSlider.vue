<template>
   <Carousel
      :items-to-show="1"
      
      :itemsToScroll="1"
      :autoplay="8000"
   
      
    >

    <slide v-for="datos in datosBannerPrincipal" :key="datos">
        <div
            class="w-full flex flex-col-reverse md:flex-row mx-auto my-20 md:px-12 md:gap-1"
        >
            <div class="md:w-1/2 text-left">
                <Heading
                    :content="datos.titulo"
                    headingType="h1"
                    
                    secondary
                />
                <Heading
                    :content="datos.content"
                    headingType="h4"
                    class="mb-5"
                    primary
                />
                <Button 
                secondary
                :text="datos.buttonText"
                class=""
                id="angedar-servicio-compradores"
                />
            </div>
            <div class="md:w-1/2 mb-4 md:mb-0">
            
            </div>
        </div>
      </slide>
      <template #addons class="hidden md:block">
      
        <Pagination />
      </template>
    </Carousel>
</template>

<script setup>
import { Carousel, Slide, Navigation, Pagination} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Heading from "../components/Heading.vue";
import Button from "../components/Button.vue";
import {datosBannerPrincipal} from '../assets/helpers/constants'
</script>

<style lang="scss" scoped>

</style>