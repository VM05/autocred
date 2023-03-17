<template>
  <div
    class="bg-white shadow-2xl rounded-3xl px-4 flex items-center py-4 md:py-10 gap-2 w-full"
  >
    <div class="w-1/3 md:w-44">
      <div
        class="w-20 md:w-16 text-secondary-900 font-semibold md:h-16 border border-secondary-900 p-10 rounded-full mx-auto flex justify-center items-center text-5xl"
      >
        {{ numero }}
      </div>
    </div>
    <div
      class="flex flex-col grow align-middle w-2/3 md:w-full"
      v-html="data.content"
    ></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: Object,
  numero: String,
});
</script>

<style scoped>
li {
  position: relative;
}

li::before {
  content: "";
  margin-right: 6px;
  position: relative;
  border: solid 1px rgba(156, 163, 175, 0.6);
  width: 15px;
  height: 15px;
  border-radius: 5px;
  display: inline-block;
  top: 3px;
}

li::after {
  content: "";
  left: 6px;
  top: 0px;
  width: 8px;
  height: 15px;
  border: solid #ba0b7c;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  z-index: 3;
}
</style>
