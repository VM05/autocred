<template>
    <div class="grid grid-cols-4 gap-8 relative">
        <div v-if="!contactoStore.mobile" class="w-3/4 left-1/2 -translate-x-1/2 top-20 absolute blue-line"></div>
        <ServicioItem  v-for="(servicioItem, index) in itemServicio" :data="servicioItem" :id="index"/>
    </div>
</template>

<script setup>
    import ServicioItem from '../components/ServicioItem.vue';
    import { defineProps } from 'vue';
    import { useContactoStore } from '../stores/contacto';
    
    const contactoStore = useContactoStore()

    defineProps({
        itemServicio: Array
    })
</script>

<style  scoped>
    .blue-line{
        background: #212559;
        z-index: -1;
        height: 5px;

    }
</style>