<template>
    <Carousel
      :items-to-show="1"
      :itemsToScroll="1"
      :autoplay="8000"
      :wrap-around="true"
      pauseAutoplayOnHover
    >
      <slide v-for="(data, index) in itemServicio" :key="index">
        <div class="flex flex-col items-center gap-4">
                    <img :src="data.imagen" :alt="data.nombre" class="w-3/5">
                    
               
                <Paragraph class="text-xl">
                    {{ data.nombre }}
                </Paragraph>

                <router-link :to="data.link">
                    <Button
                        text="Más información"
                        outlineSecondary
                        secondary
                        class="w-full"
                    />
                </router-link>
            </div>
      </slide>
      <template #addons>
 
        <Pagination />
      </template>
    </Carousel>
  </template>
  
  <script setup>
  import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  import Paragraph from "../components/Paragraph.vue";
  import Button from "../components/Button.vue";
  import { defineProps } from "vue";

  defineProps({
    itemServicio: Array,
  })
  </script>
  
  <style scoped>
   
  img {
    height: 200px;
    width: 100%;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none;
  }
  </style>
  