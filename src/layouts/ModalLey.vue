<template>
    <Modal
      @on:close="cerrarModal"
      v-if="contactoStore.modal_open"
    >
      <template v-slot:header>
        <div class="relative">
            <div class="flex items-center flex-col">
                <img src="../assets/img/logo-autocred-menu.svg" alt="Autocred" class="w-52">
                <Heading primary content="importante!" class="text-xl mt-5 uppercase" heading-type="h3"/>      
            </div>
           
          <p
            class="absolute -right-10 text-gray-400 px-3 py-1 -top-10 bg-slate-100 font-semibold rounded-full cursor-pointer"
            @click.prevent="cerrarModal"
          >
            X
          </p>
        </div>
      </template>
      <template v-slot:body>
        <div class="w-full text-justify my-3 flex justify-center flex-col">
          <Paragraph>
            Debido a la nueva <span class="font-bold">ley N&deg; 21.389</span> vigente desde el 18 de noviembre de 2022, las transferencias de vehículos entre <span class="font-bold">personas con deudas por pensión de alimentos</span> serán rechazadas, por lo que solicitaremos que nos acrediten el estado de deudas de pensión alimenticia para poder finalizar este proceso.
          </Paragraph>  
          <router-link to="/blog/1" class="mx-auto">
            <Button secondary="" text="ir al articulo" class="uppercase my-4 w-48" />
          </router-link>
          
        </div>
      </template>
<!-- 
      <template v-slot:footer>
        <div class="flex justify-between mt-5 uppercase">
            <Button primary class="w-52" text="NO VOLVER A MOSTRAR" />
            <Button secondary text="CERRAR" class=" w-48" @click="cerrarModal"/>
        </div>
      </template> -->
      </Modal>
</template>

<script setup>
import Modal from '../components/ModalView.vue'
import { useContactoStore } from '../stores/contacto';
import {onBeforeMount } from 'vue';
import Paragraph from '../components/Paragraph.vue';
import Heading from '../components/Heading.vue';
import Button from '../components/Button.vue';

const contactoStore = useContactoStore();


const cerrarModal = () => {
  contactoStore.modal_open = false;
};
</script>

<style lang="scss" scoped>

</style>