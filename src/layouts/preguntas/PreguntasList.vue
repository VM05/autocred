<template>
  <div class="mb-20">
    <Heading v-if="comprador" content="Comprador" class="mb-10" />
    <Heading v-if="vendedor" content="Vendedor" class="mb-10" />

    <div class="grid gap-6 mb relative">
      <PreguntaAcordion
        v-for="(item, index) in questionsVendedor"
        :key="index"
        :data="item"
        v-if="vendedor"
        :primary="primary"
        :secondary="secondary"
        class="cardQuestion justify-self-end z-10"
      />
      <PreguntaAcordion
        v-for="(item, index) in questionsComprador"
        :key="index"
        :data="item"
        v-if="comprador"
        :primary="primary"
        :secondary="secondary"
        class="cardQuestion justify-self-start md z-10"
      />
      <img
        src="../../assets/img/faq_comprador.png"
        alt=""
        class="img absolute top-0 right-0 z-0 md hidden md:block"
        v-if="comprador"
      />
      <img
        src="../../assets/img/faq_vendedor.png"
        alt=""
        class="img absolute top-0 left-0 z-0 md hidden md:block"
        v-if="vendedor"
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
  width: 100%;
}
@media (min-width: 768px) {
  .cardQuestion {
    width: 70%;
  }
  .img {
    width: 37%;
  }
}
</style>
