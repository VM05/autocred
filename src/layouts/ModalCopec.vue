<template>
    <div>
 <Modal @on:close="cerrarModal" v-if="contactoStore.modal_open" ancho="900px" >
      <template v-slot:header>
        <div class="relative">
          <a class="absolute -right-10 text-gray-400 px-3 py-1 -top-10 bg-slate-100 font-semibold rounded-full cursor-pointer" href="" @click.prevent="cerrarModal">X</a>
        </div>
      </template>

      <template v-slot:body>
        <div class="flex relative mt-5 flex-col md:flex-row mb-36 md:mb-0">
            <div class=" md:w-3/5 text-center">
                <p class="text-primary-900 font-semibold leading-tight md:text-5xl text-2xl">Durante <span class="underline">Noviembre</span> <br> tu <span class="text-secondary-900">crédito</span> viene con <span class="text-secondary-900 uppercase">combustible!</span></p>
            </div>
            <div class="w-1/2 absolute -right-5 top-0">
                <img src="../assets/img/flecha-fucsia.webp" alt="flecha" class=" md:w-14 w-10 absolute md:left-14 -left-44 -top-10 md:-top-5 -scale-x-100 md:scale-x-100 rotate-45 md:rotate-0">
                <img src="../assets/img/bencina.webp" alt="bencina" class="absolute md:-top-3 top-24">
            </div>
        </div>

        <div class="flex mt-14 mb-5 md:gap-10 gap-5 md:px-12 flex-col md:flex-row">
          <div class=" bg-gray-200 p-7 md:w-1/2 w-full text-center relative">
            <img src="../assets/img/flecha-azul.webp" alt="arrow" class="absolute w-12 right-1 md:-right-2 md:-top-2 -bottom-28 rotate-45 md:rotate-0">
            <p class=" text-gray-700 text-sm md:text-base">Por cualquier <span class=" font-bold ">financiamiento</span> realizado en Autocred, recibe una <span class=" font-semibold">gift card</span> por <span class=" font-semibold">$50.000</span> de combustible para usar en estaciones Copec a lo largo de <span class=" font-semibold">todo Chile!</span></p>
          </div>
          <div class="flex flex-col items-center w-full md:w-80 relative">
            <div class="flex items-end absolute move-top md:h-fit md:static">
              <img src="../assets/img/copec.webp" alt="copec" class="mr-2 md:w-16 w-12">
              <p class=" md:text-5xl text-4xl text-primary-900 font-semibold italic">$50.000</p>
            </div>
            <span class="text-center block md:mt-2 ml-2 text-gray-400 md:text-lg italic font-semibold md:font-normal text-base">Oferta válida para todo Chile!</span>
            <div class="w-full md:w-1/2 mx-auto mt-5 flex justify-center">
              <router-link to="/compradores#simulador">
              <Button text="Evalúa tu crédito" secondary id="evalua" @click="cerrarModal"/>
            </router-link>
            </div>
          </div>
        </div>
      </template>
    </Modal>
    </div>
</template>

<script setup>
import Modal from "../components/ModalView.vue";
import Button from "../components/Button.vue";
import {ref} from 'vue'
import { useContactoStore } from "../stores/contacto";


const contactoStore = useContactoStore();
const cerrarModal = ()=>{
  contactoStore.modal_open = false
}
</script>

<style scoped>
    @media (max-width:500px){
      .move-top{
        top:-265px

      }

    }

    
</style>