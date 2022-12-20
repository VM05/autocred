<template>
    <div class="my-16 md:px-12">
        <Heading :content="servicio" heading-type="h2" v-if="!contactoStore.mobile"/>
   
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
        <div
            class="grid gap-8 w-full"
            :class="right? 'order-3 md:order-1':'order-3 md:order-2'"
        >
            <TarjetaServicio
            v-for="cardData in data"
            :data="cardData"
            :servicio="servicio"
            />
        </div>
        <Heading :content="servicio" heading-type="h2" v-if="contactoStore.mobile" class="order-2"/>
        <div :class="right? 'order-1 md:order-2':'order-1'">
            <img
            :src="right? '/img/nuevos-servicios/Compradores-desktop.webp':'/img/nuevos-servicios/vendedores-Desktop.webp'"
            alt="servicio para vendedores"    
        />
        </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import Heading from '../components/Heading.vue';
  import TarjetaServicio from '../components/TarjetaServicio.vue';
  import { useContactoStore } from '../stores/contacto';

  const contactoStore = useContactoStore();
  
  defineProps({
    data: Array,
    right: Boolean,
    servicio: String,
  });
  </script>
  
  <style scoped>
 img {
      object-fit: cover;
    }
  </style>