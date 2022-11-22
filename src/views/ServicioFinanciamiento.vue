<template>
        <Simulador id="simulador" />
        
        <Heading :content="dataServicios[1].title" class="md:px-12" />
        <div class="md:px-12">
          <div
            class="grid grid-cols-1 md:grid-cols-2 md:pb-40 mb-18 md:mb-36 gap-2 md:flex md:relative md:justify-end"
          >
            <div class="justify-self-end md:absolute md:w-5/12 top-0 left-0">
              <img :src="dataServicios[1].img" :alt="dataServicios[1].title" class="w-full" />
            </div>
            <div
              class="bg-white rounded-xl shadow-xl pt-16 pb-10 px-8 flex flex-col justify-between md:w-1/2"
            >
              <Paragraph1 class="text-primary-900 font-medium text-base mb-3">
                {{ dataServicios[1].content }}
              </Paragraph1>
              <router-link
                :to="{ hash: '#simulador' }"
                class="w-fit self-center"
          
                @click="useContacto.selectService = dataServicios[1]"
                :id="
                  dataServicios[1].id == 'transferencias'
                    ? 'boton-transferencia'
                    : dataServicios[1].id == 'tag'
                    ? 'boton-tag'
                    : 'boton-seguro'
                "
              >
                <Button1
                  :text="dataServicios[1].buttonText"
                  secondary
                  class="w-fit self-center"
                />
              </router-link>
            </div>
          </div>
          </div>

          <div class="my-10"><hr /></div>

          <FeaturesList :data="featuresFinanciamiento" class="mb-24" />
        <Hablemos id="contacto" />

</template>

<script setup>
import Hablemos from '../layouts/Hablemos.vue';
import {dataServicios, featuresFinanciamiento } from '../assets/helpers/constants';
import FeaturesList from "../components/FeaturesList.vue";
import Heading from '../components/Heading.vue';
import Paragraph1 from '../components/Paragraph.vue';
import Button1 from '../components/Button.vue';
import Simulador from '../layouts/Simulador.vue';
import { useHead } from "@vueuse/head";

useHead({
  title: "Crédito Automotriz - financiamiento para tu auto usado | Autocred.cl",
  meta: [
    {
      name: "description",
      content:
        "Tu mejor copiloto para la compra y venta de vehículos usados entre personas, servicio de financiamiento inteligente, servicio de financiamiento express, servicio de financiamiento convencional, Autos usados en Chile, Compra y venta autos usados en Chile, Autos Seminuevos, Vehículos Usados, financiamiento, Chile auto, Autos Chile, Financiamiento de autos, Financiamiento de Vehículos, financiamiento de autos usados de lujo en Chile, contamos con Asesores ejecutivos que te ayudarán a concretar la venta.",
    },
  ],
});

</script>

<style lang="scss" scoped>

</style>