<template>
  <div class="mb-28 grid md:px-12">
    <Heading
      content="Servicio para compradores"
      class="mb-8"
      highlight="compradores"
      highlight-img="compradores"
    />
    <ServiciosList :data="serviciosCompradores" right class="mb-20" />
    <router-link to="#contacto" class="justify-self-center"
      ><ButtonVue
        text="Contactanos"
        class="justify-self-center w-fit"
        primary
        id="contactanos"
    /></router-link>
  </div>
</template>

<script setup>
import Heading from "../../components/Heading.vue";
import ServiciosList from "../../components/ServiciosList.vue";
import ButtonVue from "../../components/Button.vue";
import { serviciosCompradores } from "../../assets/helpers/constants";
</script>

<style scoped></style>
