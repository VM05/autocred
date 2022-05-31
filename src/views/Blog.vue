<template>
  <Container>
    <Heading1 content="Autocred en medios" class="mb-4" heading-type="h2" />
    <ListBlog />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Heading1 from "../components/Heading.vue";
import ListBlog from "../components/ListBlog.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Autocred | Blog",
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
