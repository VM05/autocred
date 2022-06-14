<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useHead } from "@vueuse/head";
import { useContactoStore } from "./stores/contacto";
import { onMounted } from "vue";

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
});
</script>

<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<style></style>
