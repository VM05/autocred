<template>
  <Container>
    <Heading
      content="En que consisten nuestros servicios?"
      headingType="h2"
      class="mb-5"
    />
    <ServiciosList1 />
    <Hablemos />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";

import Heading from "../components/Heading.vue";

import Hablemos from "../layouts/Hablemos.vue";
import ServiciosList1 from "../layouts/ServiciosList.vue";
</script>

<style scoped></style>
