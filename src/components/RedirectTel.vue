<template>
    <Container>
    <div  class="mt-50 ">
        <a href="tel:+56224024934" class="block telefono text-white">+56224024934</a>
    </div>
    </Container>
</template>

<script setup>
import Container from '../layouts/Container.vue';
import { onMounted } from 'vue';

onMounted(()=>{
    const telefono = document.querySelector('.telefono')
    telefono.click()
})
</script>

<style scoped>

</style>