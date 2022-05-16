<template>
  <div class="mb-20">
    <Heading v-if="comprador" content="Comprador" class="mb-10" />
    <Heading v-if="vendedor" content="Vendedor" class="mb-10" />

    <div class="grid gap-6 mb">
      <PreguntaAcordion
        v-for="(item, index) in questionsVendedor"
        :key="index"
        :data="item"
        v-if="vendedor"
        :primary="primary"
        :secondary="secondary"
        class="cardQuestion justify-self-end"
      />
      <PreguntaAcordion
        v-for="(item, index) in questionsComprador"
        :key="index"
        :data="item"
        v-if="comprador"
        :primary="primary"
        :secondary="secondary"
        class="cardQuestion justify-self-start"
      />
    </div>
  </div>
</template>

<script setup>
import PreguntaAcordion from "../../components/PreguntaAcordion.vue";
import {
  questionsVendedor,
  questionsComprador,
} from "../../assets/helpers/constants";
import Heading from "../../components/Heading.vue";
defineProps({
  vendedor: Boolean,
  comprador: Boolean,
  primary: Boolean,
  secondary: Boolean,
});
</script>

<style scoped>
.cardQuestion {
  width: 80%;
}
</style>
