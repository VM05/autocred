<template>
  <div class="shadow-2xl rounded-2xl overflow-hidden py-5">
    <div class="relative bg-white text-center py-5">
      <Heading
        :content="item.title"
        heading-type="h3"
        secondary
        class="mx-10"
      />
      <!-- <ChevronDownIcon
        class="absolute top-1/2 -translate-y-1/2 right-5 w-8 transition text-gray-300"
        :class="isClicked ? 'rotate-180' : ''"
      /> -->
    </div>

    <!-- :class="isClicked ? 'max-h-full pb-10' : 'h-0'" -->
    <div
      class="max-h-full transition-all overflow-hidden px-10 text-center"
      v-html="item.content"
    ></div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from "@heroicons/vue/outline";
import Heading from "./Heading.vue";
import { ref } from "vue";

const props = defineProps({
  item: Object,
});

//variables
// const isClicked = ref(true);
// funciones
// const handle = () => {
//   isClicked.value ? (isClicked.value = false) : (isClicked.value = true);
// };
</script>

<style scoped>
li {
  margin-bottom: 10px;
}
</style>
