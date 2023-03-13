<template>
  <div>
    <div
      class="shadow-md md:shadow-xl md:hover:shadow-2xl rounded-xl p-5 flex flex-col flex-grow-1 h-full place-items-center cards-tipo-credito transition group md:hover:-translate-y-1 md:hover:bg-primary-800"
      :class="[
        item.valor == tipoCredito
          ? 'bg-primary-900 text-white -translate-y-1'
          : 'bg-white text-primary-900 -translate-y-0',
      ]"
      tabindex="-1"
      :data-valor="item.valor"
    >
      <Heading
        primary
        :content="item.titulo"
        heading-type="h4"
        class="md:group-hover:text-white"
        :class="item.valor == tipoCredito ? 'text-white' : ''"
      />
      <div class="mt-5">
        <div v-html="item.contenido"></div>
      </div>
      <a
        @click="handler"
        class="group-hover:bg-secondary-900 py-3 px-5 cursor-pointer text-white rounded-md block mt-5 transition"
        :class="
          item.valor == tipoCredito ? 'bg-secondary-900' : 'bg-secondary-700'
        "
        >Lo Quiero!</a
      >
    </div>
  </div>
</template>

<script setup>
import Heading from "./Heading.vue";

const props = defineProps({
  item: Object,
  tipoCredito: String,
});

const emit = defineEmits(["credito", "botonSeguir"]);

const handler = (e) => {
  emit("credito", e.target.parentElement.dataset.valor);
  emit("botonSeguir", 1);
};
</script>

<style lang="scss" scoped></style>
