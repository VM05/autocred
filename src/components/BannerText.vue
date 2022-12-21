<template>
    <div class="banner-text relative w-full flex flex-col bg-white shadow-xl rounded-3xl">
        <div>
            <img :src="linkImagen" alt="financiamiento-autocred" class="w-full rounded-3xl">
        </div>
      <Heading class="absolute top-12 md:top-1/2 md:-translate-y-1/2 md:left-20 md:w-2/5 text-center md:text-left px-5" heading-type="h2" 
      :content="textoBanner" />
    </div>
</template>

<script setup>
import Heading from './Heading.vue';
import { defineProps } from 'vue';

const props = defineProps({
    linkImagen: String,
    textoBanner: String,
})
</script>

<style  scoped>

</style>