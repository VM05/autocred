<template>
  <div class="flex flex-col gap-2">
    <img src="https://api.lorem.space/image/furniture?w=300&h=200" alt="" />
    <Paragraph class="font-medium text-base text-primary-700">
      Medio prensa 03-02-22
    </Paragraph>
    <Heading
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aspernatur optio quas modi assumenda in"
      :headingType="highlight ? 'h3' : 'h5'"
    />
    <Button text="Ver mas" class="w-min" secondary />
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
});
</script>

<style scoped>
img {
  border-bottom-right-radius: 25%;
  width: 100%;
  object-fit: cover;
}
</style>
