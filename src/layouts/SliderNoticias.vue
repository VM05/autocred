<template>
    <Carousel
      :items-to-show="1"
      :itemsToScroll="1"
      :autoplay="8000"
      :wrap-around="true"
      pauseAutoplayOnHover
    >
      <slide v-for="(data, index) in posts.slice(0,3)" :key="index">
        <div class="flex flex-col">
    <div>
      <img :src="data.img" alt="noticias Autocred" class="object-cover"/>
    </div>

    <Paragraph class="font-medium text-base text-primary-700">
      {{ data.medio + " " + data.date }}
    </Paragraph>

      <Paragraph class="font-semibold mb-3 text-lg" >
        {{data.title}}
      </Paragraph>

    <router-link
      :to="{
        name: 'Articulo',
        params: {
          id: data.id,
          title: data.title,
          content: data.body,
          image: data.img,
          medio: data.medio,
          date: data.date,
          imgMobile: data.imgMobile,
        },
      }"
    >
      <Button text="Ver mas" class="w-min" secondary />
    </router-link>
  </div>
      </slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </template>
  
  <script setup>
  import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  import Paragraph from "../components/Paragraph.vue";
  import Button from "../components/Button.vue";
  import { posts } from "../assets/helpers/constants";
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
  