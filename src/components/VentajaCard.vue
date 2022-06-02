<template>
  <div class="flex flex-col justify-between gap-4">
    <div class="flex flex-col gap-4">
      <img :src="data.src" alt="" class="w-full" />
      <Heading1 headingType="h3" :content="data.name" />
      <Paragraph class="font-medium text-base">
        {{ data.content }}
      </Paragraph>
    </div>
    <!-- <router-link to="#contacto" class="w-full self-center">
      <Button1 text="Agenda tu servicio" secondary class="w-full self-center" />
    </router-link> -->
  </div>
</template>

<script setup>
import Heading1 from "./Heading.vue";
// import Button1 from "./Button.vue";
import Paragraph from "./Paragraph.vue";

defineProps({
  src: String,
  data: Object,
});
</script>

<style lang="scss" scoped></style>
