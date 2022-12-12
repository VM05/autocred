<template>
    <Container>
      <nuevoBanner class="md:mb-5" />
      <VentajasView />
      <ExperienciaConAutocred />
      <ListaServicios/>
      <Respaldo />
      <Experiencia />
      <Comentarios />
      <DondeEstamos />
      <SimuladorDos />
      <Medios />
    </Container>
  </template>
  
  <script setup>
  import Container from "../layouts/Container.vue";
  import Servicios from "../layouts/Servicios.vue";
  import Respaldo from "../layouts/Respaldo.vue";
  import Comentarios from "../layouts/Comentarios.vue";
  import DondeEstamos from "../layouts/DondeEstamos.vue";
  import Hablemos from "../layouts/Hablemos.vue";
  import Experiencia from "../layouts/Experiencia.vue";
  import ListaServicios from "../layouts/ListaServicios.vue";
  import { useHead } from "@vueuse/head";
  import ExperienciaConAutocred from "../layouts/ExperienciaConAutocred.vue";
  import nuevoBanner from "../layouts/NuevoBanner.vue";
  import VentajasView from "../layouts/VentajasView.vue";
  import SimuladorDos from '../layouts/SimuladorDos.vue'
  import {onBeforeMount, ref , defineAsyncComponent} from 'vue';

  const Medios = defineAsyncComponent(()=> import(`../layouts/${componenteMedios.value}.vue`))
  const componenteMedios = ref('')
  
  onBeforeMount(() => {
    if(window.innerWidth >= 320 && window.innerWidth <= 480){
      componenteMedios.value = 'SliderNoticias'
    }else{
      componenteMedios.value = 'Medios'
    }
  })


  useHead({
    title: "Autocred Chile tu mejor copiloto",
    meta: [
      {
        name: "description",
        content:
          "Tu mejor copiloto para la compra y venta de vehículos usados entre personas. ¡Que tu experiencia sea un gran viaje! Te acompañamos de manera presencial, online y móvil durante todo el proceso.",
      },
    ],
  });
  </script>
  
  <style scoped></style>
  