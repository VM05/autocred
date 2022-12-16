<template>
    <div class="banner-text relative w-full bg-white">
        <div>
            <img :src="linkImagen" alt="financiamiento-autocred" class="w-full">
        </div>
      <Heading class="absolute top-1/2 -translate-y-1/2 w-2/5" heading-type="h2" 
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