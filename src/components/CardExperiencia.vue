<template>
  <div class="flex gap-4 flex-col items-center">
    <div class="mascara relative grid place-content-center w-full">
      <img
        src="../assets/img/mascara3.svg"
        alt=""
        class="mask z-0 w-full h-full"
      />
      <img
        src="../assets/img/Pedro.jpg"
        alt=""
        class="profile rounded-full self-center object-cover relative z-10"
      />
    </div>

    <Heading content="Pedro Engel" headingType="h3" secondary />
    <Paragraph1 class="font-bold text-base">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus
      impedit doloribus, deleniti, odit, consequatur eum dicta obcaecati
    </Paragraph1>
  </div>
</template>

<script setup>
import Heading from "./Heading.vue";
import Paragraph1 from "./Paragraph.vue";

defineProps({
  data: Object,
});
</script>

<style scoped>
.mascara {
  height: 270px;
}
.mask {
  filter: opacity(0.1) grayscale(1);
  position: absolute;
  top: 0;
  left: 0;
}
.profile {
  width: 225px;
  height: 225px;
}
</style>
