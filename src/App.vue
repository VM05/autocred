<script setup>
  import { useHead } from '@vueuse/head';
  import { useContactoStore } from './stores/contacto';
  import { onBeforeMount, watch } from 'vue';
  import WhatsappButton from './components/WhatsappButton.vue';
  import ws from './components/ws.vue';
  import axios from 'axios';

  useHead({
    title: 'Autocred Chile tu mejor copiloto',
    meta: [
      {
        name: 'description',
        content:
          'Autocred lo hace fácil. Postula simultáneamente tu crédito con diferentes crediticias y obtén una aprobación en segundos',
      },
    ],
  });

  const storeContacto = useContactoStore();

  onBeforeMount(async () => {
    const { data } = await axios.get(
      'https://proyecto-calendario-2ee58-default-rtdb.firebaseio.com/fechas.json'
    );

    console.log(Object.keys(data));
    let arreglo = [];
    for (let id of Object.keys(data)) {
      arreglo.push({ id, ...data[id] });
    }

    console.log(arreglo);

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
