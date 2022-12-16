<template>
    <div class="my-10 md:px-12">
        <Heading :content="titulo" class="mb-10" heading-type="h2"/>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-x-32">
            <CardEmpleado v-for="cardEmpleado in data" :data="cardEmpleado" />
        </div>
    </div>
  </template>
  
  <script setup>
  import CardEmpleado from '../components/CardEmpleado.vue';
  import Heading from '../components/Heading.vue';
  defineProps({
    data: Array,
    titulo: String,
  });
  </script>
  
  <style lang="scss" scoped></style>