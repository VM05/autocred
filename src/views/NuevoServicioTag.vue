<template>
    <Container>
          <Heading :content="nuevaDataServicios[3].title" class="md:px-12" />
          <div class="md:px-12">
            <div
              class="flex md:flex-row  flex-col justify-around items-center justify-items-center mt-10 mb-20"
            >
              <div class=" md:w-1/2 top-0 left-0">
                <img :src="nuevaDataServicios[3].img" :alt="nuevaDataServicios[2].title" class="mx-auto md:mx-0 w-2/3 md:w-1/2" />
              </div>
              <div
                class=" w-full md:w-1/2"
              >
              <FeaturesList :data="newFeaturesTag" class=" md:grid-cols-1 mt-5 md:mt-0" />
              </div>
            </div>
            </div>
            
          <Hablemos id="contacto" />
        </Container>
  </template>
  
  <script setup>
  import Hablemos from '../layouts/Hablemos.vue';
  import { newFeaturesTag, nuevaDataServicios } from '../assets/helpers/constants';
  import FeaturesList from "../components/FeaturesList.vue";
  import Heading from '../components/Heading.vue';
  import { useHead } from "@vueuse/head";
  import Container from '../layouts/Container.vue';
  
  useHead({
    title: "Autocred | Servicios de Transferencias de Automóviles",
    meta: [
      {
        name: "description",
        content:
          "Transfiere tu automóvil en solo 20 minutos. En nuestros módulos, oficina móvil o vía online, sin filas ni esperas.",
      },
    ],
  });
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>