<template>
  <div>
    <Heading
      heading-type="h3"
      custom-size="32px"
      content="Canales de Atención"
      class="text-center mb-10"
    />

    <div
      class="flex flex-row items-center md:justify-center mb-10 gap-5"
      v-for="item in canalesAtencion"
      :key="item"
    >
      <img :src="item.img" alt="canal atencion" class="w-20" />
      <p class="md:text-2xl text-primary-900" v-html="item.content"></p>
    </div>
  </div>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import Paragraph from "../components/Paragraph.vue";
import { canalesAtencion } from "../assets/helpers/constants";
</script>

<style scoped></style>
