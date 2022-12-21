<template>
    <div class="my-16 md:px-12">
        <Heading :content="servicio" heading-type="h2" v-if="!contactoStore.mobile"/>
   
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
        <div
            class="grid gap-8 w-full"
            :class="right? 'order-3 md:order-1':'order-3 md:order-2'"
        >
            <TarjetaServicio
            v-for="(cardData) in data"
            :data="cardData"
            :servicio="servicio"
            @click="collapsar(cardData.cardNumber)"
            class="servicio overflow-hidden "
            :class="contactoStore.mobile?' items-start':''"
            />
        </div>
        <Heading :content="servicio" heading-type="h2" v-if="contactoStore.mobile" class="order-2 text-center px-8"/>
        <div :class="right? 'order-1 md:order-2':'order-1'">
            <img v-if="!contactoStore.mobile"
            :src="right? '/img/nuevos-servicios/Compradores-desktop.webp':'/img/nuevos-servicios/vendedores-Desktop.webp'"
            alt="servicio para vendedores"    
        />
        <img v-else
            :src="right? '/img/nuevos-servicios/Compradores.webp':'/img/nuevos-servicios/vendedores.webp'"
            alt="servicio para vendedores"    
        />
            
        </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import Heading from '../components/Heading.vue';
  import TarjetaServicio from '../components/TarjetaServicio.vue';
  import { useContactoStore } from '../stores/contacto';
  

  const contactoStore = useContactoStore();
  const collapsar = (i)=>{
    const arrows = document.querySelectorAll('.arrow')
    const contenedores = document.querySelectorAll('.servicio')
    contenedores[i].classList.toggle('hide')
    arrows[i].classList.toggle('rotar')
  }
  
  defineProps({
    data: Array,
    right: Boolean,
    servicio: String,
  });
  </script>
  
  <style scoped>
 img {
      object-fit: cover;
    }

    @media (max-width:500px){

  
    .servicio{
        transition: all 0.3s ease;
        max-height: 65px;
    }

    .servicio.hide{
        animation: acordion 1s forwards;
    }

     @keyframes acordion {
        from{
            max-height: 65px;
        }
        to{
            max-height: 1000px;
        }
     }

       :deep(.arrow) {
        border: solid black;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        }

      :deep(.down) {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
        }

        .servicio :deep(.rotar){
            transform: rotate(225deg);
            -webkit-transform: rotate(225deg);
        }
    }

  </style>