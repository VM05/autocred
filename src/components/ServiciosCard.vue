<template>
    <div class="shadow-2xl p-3 rounded flex justify-center items-center flex-col bg-white">
        <img :src="props.imagen" :alt="props.titulo">
        <Paragraph>{{props.titulo}}</Paragraph>
    </div>
</template>

<script setup>
import Paragraph from './Paragraph.vue';
const props = defineProps({
    imagen:String,
    titulo:String,

})
</script>

<style  scoped>

</style>