<template>
  <div class="flex flex-col gap-2 noticia-grid">
    <div class="imagen-noticia">
      <img :src="data.img" alt="noticias Autocred" />
    </div>

    <Paragraph class="font-medium text-base text-primary-700">
      {{ data.medio + " " + data.date }}
    </Paragraph>

    <Heading
      :content="data.title"
      :headingType="highlight || indice == 0 ? 'h3' : 'h5'"
    />
    <router-link
      :to="{
        name: 'Articulo',
        params: {
          id: data.id,
          title: data.title,
          content: data.body,
          image: data.img,
          medio: data.medio,
          date: data.date,
          imgMobile: data.imgMobile,
        },
      }"
    >
      <Button text="Ver mas" class="w-min" secondary />
    </router-link>
  </div>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import Button from "../components/Button.vue";
import Paragraph from "../components/Paragraph.vue";

defineProps({
  highlight: {
    type: Boolean,
    default: false,
  },
  indice: Number,
  data: Object,
});
</script>

<style scoped>
img {
  border-bottom-right-radius: 25%;
  width: 100%;
  object-fit: cover;
}
</style>
