<template>
  <div>
    <div
      class="shadow-xl rounded-xl p-5 flex flex-col flex-grow-1 h-full place-items-center"
    >
      <Heading primary content="Crédito convencional" heading-type="h4" />
      <div class="mt-5">
        <Paragraph class="text-center my-3"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          architecto eos dolorem consequuntur error dolor voluptates sapiente
          facilis est iusto. Eos molestiae veritatis ea vero laborum culpa, sint
          consequuntur perferendis ipsum minus molestias aut deserunt ab
          quisquam illum dolores beatae.</Paragraph
        >
      </div>
      <a
        @click.prevent="handler"
        :data-valor="props.valor"
        class="bg-secondary-700 hover:bg-secondary-900 py-3 px-5 cursor-pointer text-white rounded-md block mt-5 transition"
        >Lo Quiero!</a
      >
    </div>
  </div>
</template>

<script setup>
import Heading from "./Heading.vue";
import Paragraph from "./Paragraph.vue";

const props = defineProps({
  valor: String,
});

const emit = defineEmits(["valor"]);

const handler = (e) => {
  emit("valor", e.target);
};
</script>

<style lang="scss" scoped></style>
