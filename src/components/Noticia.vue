<template>
  <div class="flex flex-col gap-2">
    <img src="https://api.lorem.space/image/furniture?w=300&h=200" alt="" />
    <Paragraph class="font-medium text-base text-primary-700">
      Medio prensa 03-02-22
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
          image: data.image,
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
