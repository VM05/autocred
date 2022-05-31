<template>
  <Container>
    <Heading1
      content="Ingresa con tu cuenta de usuario o registrate"
      class="text-center mb-5"
    />
    <Register1 />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Heading1 from "../components/Heading.vue";
import Register1 from "../components/Register.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Autocred | Registro",
  meta: [
    {
      name: "description",
      content:
        "Autocred lo hace fácil. Postula simultáneamente tu crédito con diferentes crediticias y obtén una aprobación en segundos",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
