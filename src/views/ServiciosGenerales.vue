<template>
    <Container>
        <div class="md:px-12">
            <Heading content="En Autocred simplificamos la compra y venta de vehículos usados entre personas particulares." heading-type="h1" class="text-center md:text-left"/>
            <Heading content="Además, ¡Hacemos todos los trámites por ti!, evitándote largas filas en notaría y Registro Civil." heading-type="h3" class="w-full text-center md:text-left md:w-3/4 mt-2"/>
            <ServiciosItemsList :item-servicio="newDataServicios" :class="contactoStore.mobile? 'my-16':'my-28'"/>     
        </div>
        <NuevaListaServicios :data="newCardDataCompradores" right servicio="<span class='text-secondary-900'>Servicios para</span> compradores particulares" />
        <NuevaListaServicios :data="newCardDataVendedores" servicio="Servicios para vendedores particulares"/>
        <Hablemos/>
        
    </Container>
</template>

<script setup>
    import Container from '../layouts/Container.vue'
    import Heading from '../components/Heading.vue';
    import NuevaListaServicios from '../layouts/NuevaListaServicios.vue';
    import Hablemos from '../layouts/Hablemos.vue';
    import {newDataServicios , newCardDataCompradores, newCardDataVendedores} from '../assets/helpers/constants'
    import { useContactoStore } from '../stores/contacto';
    import { defineAsyncComponent,onBeforeMount,ref } from 'vue';

    const contactoStore = useContactoStore()
    const ServiciosItemsList = defineAsyncComponent(()=> import(`../layouts/${componenteMedios.value}.vue`))
    const componenteMedios = ref('')
  
  onBeforeMount(() => {
    if(contactoStore.mobile){
      componenteMedios.value = 'SliderServicios'
    }else{
      componenteMedios.value = 'ServiciosItemsList'
    }
  })


</script>

<style lang="scss" scoped>

</style>