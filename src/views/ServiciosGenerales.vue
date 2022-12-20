<template>
    <Container>
        <div class="md:px-12">
            <Heading content="En Autocred simplificamos la compra y venta de vehículos usados entre personas particulares." heading-type="h1"/>
            <Heading content="Además, ¡Hacemos todos los trámites por ti!, evitándote largas filas en notaría y Registro Civil." heading-type="h3" class="w-3/4 mt-2"/>
            <ServiciosItemsList :item-servicio="newDataServicios" class="my-28"/>      
        </div>
        <NuevaListaServicios :data="newCardDataCompradores" right servicio="Servicios para compradores particulares" />
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
    import ServiciosItemsList from '../layouts/ServiciosItemsList.vue';
</script>

<style lang="scss" scoped>

</style>