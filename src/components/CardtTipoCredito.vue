<template>
  <div>
    <div
      class="shadow-xl hover:shadow-2xl rounded-xl p-5 flex flex-col flex-grow-1 h-full place-items-center cards-tipo-credito transition group hover:-translate-y-1 hover:bg-primary-800 focus:bg-primary-800 focus:-translate-y-1 text-primary-900"
      tabindex="-1"
      @click="handler"
      :data-valor="item.valor"
    >
      <Heading
        primary
        :content="item.titulo"
        heading-type="h4"
        class="group-hover:text-white group-focus:text-white pointer-events-none"
      />
      <div class="mt-5 pointer-events-none">
        <div v-html="item.contenido"></div>
      </div>
      <a
        class="bg-secondary-700 group-hover:bg-secondary-900 group-focus:bg-secondary-900 py-3 px-5 cursor-pointer text-white rounded-md block mt-5 transition pointer-events-none"
        >Lo Quiero!</a
      >
    </div>
  </div>
</template>

<script setup>
import Heading from "./Heading.vue";

const props = defineProps({
  item: Object,
});

const emit = defineEmits(["credito"]);

const handler = (e) => {
  const cards = document.querySelectorAll(".cards-tipo-credito");

  emit("credito", e.target);
};
</script>

<style lang="scss" scoped></style>
