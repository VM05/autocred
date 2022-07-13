<template>
  <Container>
    <div class="mb-16">
      <img
        :src="$route.params.image"
        alt=""
        class="w-full mb-4 h-64 object-contain"
      />
      <Paragraph class="font-medium text-base text-primary-700 mb-4">
        {{ $route.params.medio + " " + $route.params.date }}
      </Paragraph>

      <Heading v-html="$route.params.title" class="mb-4" />

      <Paragraph
        class="font-medium text-base text-primary-700"
        v-html="$route.params.content"
      >
      </Paragraph>
    </div>
    <Medios />
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Paragraph from "../components/Paragraph.vue";
import Heading from "../components/Heading.vue";
import Medios from "../layouts/Medios.vue";
</script>

<style scoped>
img {
  border-bottom-right-radius: 25%;
  width: 100%;
  object-fit: cover;
  height: 400px;
  object-position: 25% 25%;
}
</style>
