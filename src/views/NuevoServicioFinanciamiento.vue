<template>
  <Container>
    <Heading
      :content="nuevaDataServicios[1].title"
      class="md:px-12 mb-10"
      heading-type="h1"
    />
    <Simulador id="simulador" />
    <div class="flex">
      <bannerText
        class="mb-20"
        :texto-banner="nuevaDataServicios[1].content"
        :link-imagen="nuevaDataServicios[1].img"
        :link-imagen-mobile="nuevaDataServicios[1].imgMobile"
      />
    </div>
    <FeaturesList :data="newFeaturesFinanciamiento" class="mb-24" />
    <Hablemos id="contacto" />
  </Container>
</template>

<script setup>
import Hablemos from "../layouts/Hablemos.vue";
import {
  nuevaDataServicios,
  newFeaturesFinanciamiento,
} from "../assets/helpers/constants";
import FeaturesList from "../components/FeaturesList.vue";
import Heading from "../components/Heading.vue";
import Simulador from "../layouts/SimuladorDos.vue";
import { useHead } from "@vueuse/head";
import Container from "../layouts/Container.vue";
import bannerText from "../components/BannerText.vue";

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

<style lang="scss" scoped></style>
