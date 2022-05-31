<template>
  <Container>
    <Heading1
      content="Ingresa con tu cuenta de usuario o registrate"
      class="text-center mb-5"
    />
    <Login1 />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Heading1 from "../components/Heading.vue";
import Login1 from "../components/Login.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Autocred | Iniciar Sesión",
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
