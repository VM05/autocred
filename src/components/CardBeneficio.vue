<template>
  <div
    class="bg-white shadow-2xl rounded-3xl px-4 flex items-center py-4 md:py-10 gap-2 w-full"
  >
    <div class="w-1/3 md:w-44">
      <div
        class="w-20 md:w-16 text-secondary-900 font-semibold md:h-16 border border-secondary-900 p-4 md:p-10 rounded-full mx-auto flex justify-center items-center text-5xl"
      >
        {{ numero }}
      </div>
    </div>
    <div
      class="flex flex-col grow align-middle w-2/3 md:w-full text-sm md:text-lg"
      v-html="data.content"
    ></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: Object,
  numero: Number,
});
</script>

<style scoped></style>
