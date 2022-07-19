<template>
  <Container>
    <div class="mb-16">
      <img :src="imagen" alt="" class="w-full mb-4 h-64 object-contain" />
      <Paragraph class="font-medium text-base text-primary-700 mb-4">
        {{ media + " " + fecha }}
      </Paragraph>

      <Heading v-html="titulo" class="mb-4" />

      <Paragraph
        class="font-medium text-base text-primary-700"
        v-html="content"
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
import { posts } from "../assets/helpers/constants";
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const content = ref("");
const imagen = ref("");
const titulo = ref("");
const media = ref("");
const fecha = ref("");

onMounted(() => {
  const numero = route.params.id - 1;
  const { body, title, img, date, medio } = posts[numero];
  content.value = body;
  imagen.value = img;
  titulo.value = title;
  media.value = medio;
  fecha.value = date;
});

watch(
  () => route.params.id,
  () => {
    content.value = route.params.content;
    imagen.value = route.params.image;
    titulo.value = route.params.title;
    media.value = route.params.medio;
    fecha.value = route.params.date;
  }
);
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
