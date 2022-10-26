<script setup>
import { useHead } from "@vueuse/head";
import { useContactoStore } from "./stores/contacto";
import { onMounted } from "vue";
import WhatsappButton from "./components/WhatsappButton.vue";

useHead({
  title: "Autocred Chile tu mejor copiloto",
  meta: [
    {
      name: "description",
      content:
        "Autocred lo hace fácil. Postula simultáneamente tu crédito con diferentes crediticias y obtén una aprobación en segundos",
    },
  ],
});

const storeContacto = useContactoStore();

onMounted(() => {
  storeContacto.fetchUtms();
  storeContacto.getProcedencia();
});
</script>

<template>
  <router-view></router-view>
  <WhatsappButton  telefono="+56946456800"/>
</template>

<style></style>
