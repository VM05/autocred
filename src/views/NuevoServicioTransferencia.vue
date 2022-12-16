<template>
  <Container>
        <Heading :content="nuevaDataServicios[0].title" class="md:px-12" />
        <div class="md:px-12">
          <div
            class="flex md:flex-row  flex-col justify-around items-center justify-items-center mt-10 mb-20"
          >
            <div class=" md:w-1/2 top-0 left-0">
              <img :src="nuevaDataServicios[0].img" :alt="nuevaDataServicios[0].title" class="mx-auto md:mx-0 w-2/3 md:w-1/2" />
            </div>
            <div
              class="bg-white rounded-xl shadow-xl pt-16 pb-10 px-8 flex flex-col justify-between w-full md:w-1/2"
            >
              <Paragraph1 class="text-primary-900 font-medium text-base md:text-left text-center mb-3">
                {{ nuevaDataServicios[0].content }}
              </Paragraph1>
              <router-link
                :to="{ hash: '#contacto' }"
                class="w-fit self-center"
                id="boton-transferencia"
              >
                <Button1
                  :text="nuevaDataServicios[0].buttonText"
                  secondary
                  class="w-fit self-center"
                />
              </router-link>
            </div>
          </div>
          </div>
          <FeaturesList :data="newFeaturesTransferencia" class="mb-24" />
        <Hablemos id="contacto" />
      </Container>
</template>

<script setup>
import Hablemos from '../layouts/Hablemos.vue';
import { newFeaturesTransferencia, nuevaDataServicios } from '../assets/helpers/constants';
import FeaturesList from "../components/FeaturesList.vue";
import Heading from '../components/Heading.vue';
import Paragraph1 from '../components/Paragraph.vue';
import Button1 from '../components/Button.vue';
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