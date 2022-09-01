<template>
  <div class="w-full grid md:mb-24">
    <div class="hidden md:flex gap-4 flex-col pt-2">
      <CardServicio
        v-for="servicio in servicioCards"
        :data="servicio"
        @clickCard="recibe"
      />
    </div>
    <Hablemos id="hablemos" :selectService="cardSelect.id" />
  </div>
</template>

<script setup>
import CardServicio from "./CardServicio.vue";
import Hablemos from "../../layouts/yapo/Hablemos.vue";
import { servicioCards } from "../../assets/helpers/API";
import { ref } from "vue";
const recibe = (e) => (cardSelect.value = e);
const cardSelect = ref({});
</script>

<style lang="scss" scoped></style>
