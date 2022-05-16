<template>
  <div class="bg-[#F9FAFB] shadow-lg rounded-xl py-8 px-12">
    <div class="flex flex-row gap-4 justify-center items-center mb-4">
      <img :src="data.src" alt="profile" class="rounded-full h-20 w-20" />
      <div>
        <Paragraph1 class="font-bold text-xl"> {{ data.nombre }} </Paragraph1>
        <Paragraph1 class="text-secondary-900 font-medium text-base">
          @{{ data.username }}
        </Paragraph1>
      </div>
    </div>
    <Paragraph1 class="font-medium text-base text-left">
      {{ data.comentario }}
    </Paragraph1>
  </div>
</template>

<script setup>
import Paragraph1 from "./Paragraph.vue";
defineProps({
  data: Object,
});
</script>

<style lang="scss" scoped></style>
