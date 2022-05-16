<template>
  <div class="flex flex-col justify-between gap-4">
    <div class="flex flex-col gap-4">
      <img :src="src" alt="" class="w-full" />
      <Heading1 headingType="h3" content="Un coopiloto todo terreno" />
      <Paragraph class="font-medium text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        officia, voluptatibus earum corporis illum consequuntur velit eos quam
        voluptas aut molestiae dolorem recusandae, asperiores eius
        <b>obcaecati</b>
        placeat amet exercitationem vitae?
      </Paragraph>
    </div>
    <a href="#contacto" class="w-fit self-center">
      <Button1 text="Agenda tu servicio" secondary class="w-fit self-center" />
    </a>
  </div>
</template>

<script setup>
import Heading1 from "./Heading.vue";
import Button1 from "./Button.vue";
import Paragraph from "./Paragraph.vue";

defineProps({
  src: String,
});
</script>

<style lang="scss" scoped></style>
