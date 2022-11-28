<template>
  <div class="flex flex-col justify-between gap-4">
    <div class="flex flex-col gap-4 grow">
      <img :src="data.src" alt="ventajas-autocred" class="w-full" width="640" height="640"/>
      <Heading1 headingType="h3" :content="data.name" />
      <Paragraph class="font-medium text-base">
        {{ data.content }}
      </Paragraph>
      <router-link :to="data.link" class="mt-auto">
      <Button 
          :text="data.textoBoton"
          secondary
          class="justify-self-center w-fit"
      />
      </router-link>
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
import Button from './Button.vue'

defineProps({
  src: String,
  data: Object,
});
</script>

<style lang="scss" scoped></style>
