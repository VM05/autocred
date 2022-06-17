<script setup>
import Heading from "../Heading.vue";
defineProps({
  data: Object,
});
const emit = defineEmits(["clickCard"]);
const handler = (value) => {
  emit("clickCard", value);
};
</script>
<template>
  <a
    class="bg-white rounded-xl shadow-lg flex gap-4 items-center px-2 pb-2"
    href="#hablemos"
    @click="handler(data)"
  >
    <img :src="data.src" alt="" class="w-16 h-16 object-contain" />
    <div>
      <Heading :content="data.name" headingType="h3" />
      <p class="text-primary-900 text-sm">
        {{ data.content }}
      </p>
    </div>
  </a>
</template>

<style lang="scss" scoped></style>
