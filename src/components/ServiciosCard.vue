<template>
    <router-link :to="props.link" class=" shadow-lg hover:shadow-xl md:p-10 p-3 rounded-2xl flex  md:text-center items-center md:flex-col gap-5 bg-white transition-all hover:-translate-x-1 hover:-translate-y-1"> 
        <img :src="props.imagen" :alt="props.titulo" class="w-16 md:w-24">
        <Paragraph class="md:text-lg font-semibold">{{props.titulo}}</Paragraph>
    </router-link>
</template>

<script setup>
import Paragraph from './Paragraph.vue';
const props = defineProps({
    imagen:String,
    titulo:String,
    link:String,
})
</script>

<style  scoped>

</style>