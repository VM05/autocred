<template>
  <Container>
    <div class="mb-16">
      <img
        src="https://i.pinimg.com/originals/18/28/6b/18286b8d077ba6539620f8bf4e6f4944.jpg"
        alt=""
        class="w-full mb-4"
      />
      <Paragraph class="font-medium text-base text-primary-700 mb-4">
        Medio prensa 03-02-22
      </Paragraph>
      <Heading :content="$route.params.title" class="mb-4" />
      <Paragraph class="font-medium text-base text-primary-700">
        {{ $route.params.content }}
      </Paragraph>
    </div>
    <!-- <Medios /> -->
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Paragraph from "../components/Paragraph.vue";
import Heading from "../components/Heading.vue";
import Medios from "../layouts/Medios.vue";
</script>

<style scoped></style>
