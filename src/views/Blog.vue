<template>
  <Container>
    <Heading1
      content="Ingresa con tu cuenta de usuario o registrate"
      class="text-center mb-5"
    />
    <ListBlog />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Heading1 from "../components/Heading.vue";
import ListBlog from "../components/ListBlog.vue";
</script>

<style lang="scss" scoped></style>
