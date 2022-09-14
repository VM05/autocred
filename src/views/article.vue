<template>
  <Container>
    <div class="mb-16">
      <picture>
        <source :srcset="imagen" media="(min-width: 600px)" />

        <source
          :srcset="imagenMobile"
          class="w-full"
          media="(max-width: 599px)"
        />
        <img :src="imagen" alt="prueba" class="w-full" />
      </picture>
      <!-- <img :src="imagen" alt="" class="w-full mb-4 h-64 object-contain" /> -->
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
import { ref, watch, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const content = ref("");
const imagen = ref("");
const titulo = ref("");
const media = ref("");
const fecha = ref("");
const imagenMobile = ref("");

onBeforeMount(() => {
  const numero = route.params.id - 1;
  const { body, title, img, date, medio, imgMobile } = posts[numero];
  content.value = body;
  imagen.value = img;
  titulo.value = title;
  media.value = medio;
  fecha.value = date;
  imagenMobile.value = imgMobile;
});

watch(
  () => route.params.id,
  () => {
    content.value = route.params.content;
    imagen.value = route.params.image;
    titulo.value = route.params.title;
    media.value = route.params.medio;
    fecha.value = route.params.date;
    imagenMobile.value = route.params.imgMobile;
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
