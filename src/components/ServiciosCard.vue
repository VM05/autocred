<template>
    <router-link :to="props.link" class="shadow-lg p-5 rounded flex  md:text-center items-center md:flex-col gap-5 bg-white transition-all hover:-translate-x-1 hover:-translate-y-1"> 
        <img :src="props.imagen" :alt="props.titulo" class="w-16">
        <Paragraph>{{props.titulo}}</Paragraph>
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