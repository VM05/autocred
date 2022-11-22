<template>
  <Container>
   <ModalCopec/>
    <BannerSlider class="md:mb-5" />
    <!-- <BannerHome>
      <template #content>
        <Heading
          content="Tu mejor copiloto para la compra y venta de vehículos usados entre personas"
          headingType="h1"
          class="mb-5"
          highlight="copiloto"
          highlightImg="copiloto"
        />
        <Heading
          content="¡Que tu experiencia sea un gran viaje!"
          headingType="h3"
          class="mb-5"
        />
        <Heading
          content="Te acompañamos de manera presencial, online y móvil durante todo el proceso."
          headingType="h4"
          class="mb-5"
        />
        <div> -->
          <!-- <Heading
            content="¿En que viaje te guiamos?"
            headingType="h4"
            class="mb-3"
          /> -->
          <!-- <div class="flex flex-col md:flex-row md:gap-4 gap-2">
            <router-link to="/vendedores">
              <Button text="Quiero vender" secondary id="quiero-vender" />
            </router-link>
            <router-link to="/compradores">
              <Button text="Quiero comprar" primary id="quiero-comprar" />
            </router-link>
          </div>
        </div>
      </template>
      <template #image>
        <div class="grid place-content-center h-full"> -->
          <!-- <img
            src="../assets/img/home_header.png"
            alt="lorem"
            class="w-full md:w-auto"
          /> -->
          <!-- <video
            autoplay
            controls
            muted
            src="../assets/video/promo.mp4"
            class="w-full md:w-auto rounded-3xl"
          ></video>
        </div>
      </template>
    </BannerHome> -->
    <Servicios class="mt-10 md:mt-0"/>
    <Ventajas />
    <Respaldo />
    <Experiencia />
    <Comentarios />
    <DondeEstamos />
    <Medios />
    <!-- <Simulador /> -->
    <Hablemos id="contacto" />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Servicios from "../layouts/Servicios.vue";
import BannerHome from "../layouts/BannerHome.vue";
import Ventajas from "../layouts/Ventajas.vue";
import Respaldo from "../layouts/Respaldo.vue";
import Heading from "../components/Heading.vue";
import Button from "../components/Button.vue";
import Comentarios from "../layouts/Comentarios.vue";
import DondeEstamos from "../layouts/DondeEstamos.vue";
import Medios from "../layouts/Medios.vue";
import Hablemos from "../layouts/Hablemos.vue";
import Experiencia from "../layouts/Experiencia.vue";
import { useHead } from "@vueuse/head";
import Simulador from "../layouts/Simulador.vue";
import ModalCopec from "../layouts/ModalCopec.vue"
import Footer from "../components/amotor/Footer.vue";
import BannerSlider from "../layouts/BannerSlider.vue";

useHead({
  title: "Autocred Chile tu mejor copiloto",
  meta: [
    {
      name: "description",
      content:
        "Tu mejor copiloto para la compra y venta de vehículos usados entre personas, servicio de financiamiento inteligente, servicio de financiamiento express, servicio de financiamiento convencional, Autos usados en Chile, Compra y venta autos usados en Chile, Autos Seminuevos, Vehículos Usados, financiamiento, Chile auto, Autos Chile, Financiamiento de autos, Financiamiento de Vehículos, financiamiento de autos usados de lujo en Chile, contamos con Asesores ejecutivos que te ayudarán a concretar la venta.",
    },
  ],
});
</script>

<style scoped></style>
