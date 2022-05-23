<template>
  <div class="bg-white shadow-2xl cardService rounded-3xl py-4 px-4">
    <div
      class="flex flex-col gap-4 md:gap-0 md:grid place-content-center items-center"
    >
      <img :src="data.img" :alt="data.name" class="w-24 md:w-full" />
      <div class="content">
        <Heading1
          :content="data.name"
          headingType="h4"
          class="font-bold mb-3"
        />
        <Paragraph class="font-medium text-base" v-html="data.content">
        </Paragraph>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import Paragraph from "../components/Paragraph.vue";
defineProps({
  data: Object,
});
</script>

<style scoped>
.md\:grid {
  grid-template-columns: 100px 1fr;
  gap: 2rem;
}
</style>
