<template>
    <div>
    <Heading heading-type="h2" primary content="Nuestros Servicios" />
    
    
    <div class="grid md:grid-cols-3 grid-cols-1 gap-x-16 md:gap-y-7 gap-y-4">
        <ServiciosCard
        v-for="servicio in nuevosServicios" :id="servicio.id"
        :imagen="servicio.imagen"
        :titulo="servicio.titulo"
        :link="servicio.link"
        />
    </div>
</div>
</template>

<script setup>
import ServiciosCard from '../components/ServiciosCard.vue';
import { nuevosServicios } from '../assets/helpers/constants'
import Heading from '../components/Heading.vue';

</script>

<style scoped>
    

</style>