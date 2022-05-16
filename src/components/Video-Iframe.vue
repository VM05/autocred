<template>
  <iframe
    :width="width"
    :height="height"
    :src="src"
    :title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default() {
      return "100%";
    },
  },
  height: {
    type: String,
    default() {
      return "500";
    },
  },
  title: {
    type: String,
    default() {
      return "hola";
    },
  },
  src: String,
});
</script>

<style lang="scss" scoped></style>
