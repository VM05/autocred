<template>
  <div class="mb-28 grid">
    <Heading content="Servicio para compradores" class="mb-8" />
    <ServiciosList :data="serviciosCompradores" right class="mb-20" />
    <router-link to="#contacto" class="justify-self-center"
      ><ButtonVue text="Contactanos" class="justify-self-center w-fit" primary
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
