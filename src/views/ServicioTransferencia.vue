<template>
  <Container>
    <Heading :content="dataServicios[0].title" class="md:px-12" />
    <div class="md:px-12">
      <div
        class="grid grid-cols-1 md:grid-cols-2 md:pb-40 mb-18 md:mb-36 gap-2 md:flex md:relative md:justify-end"
      >
        <div class="justify-self-end md:absolute md:w-5/12 top-0 left-0">
          <img
            :src="dataServicios[0].img"
            :alt="dataServicios[0].title"
            class="w-full"
          />
        </div>
        <div
          class="bg-white rounded-xl shadow-xl pt-16 pb-10 px-8 flex flex-col justify-between md:w-1/2"
        >
          <Paragraph1 class="text-primary-900 font-medium text-base mb-3">
            {{ dataServicios[0].content }}
          </Paragraph1>
          <router-link
            :to="{ hash: '#contacto' }"
            class="w-fit self-center"
            @click="useContacto.selectService = dataServicios[0]"
            :id="
              dataServicios[0].id == 'transferencias'
                ? 'boton-transferencia'
                : dataServicios[0].id == 'tag'
                ? 'boton-tag'
                : 'boton-seguro'
            "
          >
            <Button1
              :text="dataServicios[0].buttonText"
              secondary
              class="w-fit self-center"
            />
          </router-link>
        </div>
      </div>
    </div>

    <div class="my-10"><hr /></div>

    <FeaturesList :data="featuresTransferencia" class="mb-24" />
    <Hablemos id="contacto" />
  </Container>
</template>

<script setup>
import Hablemos from "../layouts/Hablemos.vue";
import {
  featuresTransferencia,
  dataServicios,
} from "../assets/helpers/constants";
import FeaturesList from "../components/FeaturesList.vue";
import Heading from "../components/Heading.vue";
import Paragraph1 from "../components/Paragraph.vue";
import Button1 from "../components/Button.vue";
import { useHead } from "@vueuse/head";
import Container from "../layouts/Container.vue";

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

<style lang="scss" scoped></style>
