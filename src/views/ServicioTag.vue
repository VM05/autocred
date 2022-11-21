<template>
        <Heading :content="dataServicios[2].title" class="md:px-12" />
        <div class="md:px-12">
          <div
            class="grid grid-cols-1 md:grid-cols-2 md:pb-40 mb-18 md:mb-36 gap-2 md:flex md:relative md:justify-end"
          >
            <div class="justify-self-end md:absolute md:w-5/12 top-0 left-0">
              <img :src="dataServicios[2].img" :alt="dataServicios[2].title" class="w-full" />
            </div>
            <div
              class="bg-white rounded-xl shadow-xl pt-16 pb-10 px-8 flex flex-col justify-between md:w-1/2"
            >
              <Paragraph1 class="text-primary-900 font-medium text-base mb-3">
                {{ dataServicios[2].content }}
              </Paragraph1>
              <router-link
                :to="{ hash: '#contacto' }"
                class="w-fit self-center"
          
                @click="useContacto.selectService = dataServicios[2]"
                :id="
                  dataServicios[2].id == 'transferencias'
                    ? 'boton-transferencia'
                    : dataServicios[2].id == 'tag'
                    ? 'boton-tag'
                    : 'boton-seguro'
                "
              >
                <Button1
                  :text="dataServicios[2].buttonText"
                  secondary
                  class="w-fit self-center"
                />
              </router-link>
            </div>
          </div>
          </div>

          <div class="my-10"><hr /></div>

          <FeaturesList :data="featuresTag" class="mb-24" />
        <Hablemos id="contacto" />

</template>

<script setup>
import Hablemos from '../layouts/Hablemos.vue';
import { featuresTag, dataServicios } from '../assets/helpers/constants';
import FeaturesList from "../components/FeaturesList.vue";
import Heading from '../components/Heading.vue';
import Paragraph1 from '../components/Paragraph.vue';
import Button1 from '../components/Button.vue';
import { useHead } from "@vueuse/head";

useHead({
  title: "Autocred | Servicio Tag ",
  meta: [
    {
      name: "description",
      content:"Te ayudamos con la habilitación o baja de tu Tag para evitar a la concesionaria."
    },
  ],
});

</script>

<style lang="scss" scoped>

</style>