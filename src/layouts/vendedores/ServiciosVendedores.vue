<template>
  <div class="mb-28 grid">
    <Heading content="Servicio para vendedores" class="mb-8" />
    <ServiciosList :data="serviciosVendores" right class="mb-20" />
    <router-link to="#contacto" class="justify-self-center">
      <ButtonVue
        text="Contactanos"
        class="justify-self-center w-fit"
        secondary
      />
    </router-link>
  </div>
</template>

<script setup>
import Heading from "../../components/Heading.vue";
import ServiciosList from "../../components/ServiciosList.vue";
import ButtonVue from "../../components/Button.vue";
import { serviciosVendores } from "../../assets/helpers/constants";
</script>

<style scoped></style>
