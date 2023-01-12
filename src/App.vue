<script setup>
import { useHead } from "@vueuse/head";
import { useContactoStore } from "./stores/contacto";
import { onBeforeMount, watch } from 'vue';
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

onBeforeMount(() => {
  storeContacto.fetchUtms();
  storeContacto.getProcedencia();
  storeContacto.isMobile();
  storeContacto.encuentraDispositivo();
});

// watch(storeContacto,()=>{
//   if(storeContacto.modal_open){
//     document.documentElement.style.overflow = "hidden"
//   }else{
//     document.documentElement.style.overflow = "auto"
//   }
// })
</script>

<template>
  <router-view></router-view>
  <WhatsappButton telefono="+56946483871" />
</template>

<style></style>
