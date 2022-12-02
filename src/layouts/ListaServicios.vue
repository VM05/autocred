<template>
    <div class="grid auto-cols-fr[minmax(100px,3fr)] gap-x-9 gap-y-4">
        <ServiciosCard
        v-for="servicio in nuevosServicios" :id="servicio.id"
        :imagen="servicio.imagen"
        :titulo="servicio.titulo"
        />
    </div>
</template>

<script setup>
import ServiciosCard from '../components/ServiciosCard.vue';
import { nuevosServicios } from '../assets/helpers/constants'

</script>

<style scoped>

</style>