<template>
  <div
    class="flex gap-2 cursor-pointer"
    @click="clickService(props.servicio.name)"
  >
    <span
      tabindex="0"
      class="w-5 h-5 border-2 border-gray-400 rounded-md focusfocus-within:border-primary-900"
      v-show="!isSelected"
    />
    <CheckIcon
      class="w-5 h-5 text-secondary-900 border-2 border-gray-400 rounded-md"
      aria-hidden="true"
      v-show="isSelected"
    />
    <label class="text-primary-900 flex gap-2 cursor-pointer">
      {{ props.servicio.name }}
    </label>
  </div>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/solid";

import { ref } from "vue";
const props = defineProps({
  servicio: Object,
});
const emit = defineEmits(["check:servicio"]);
const isSelected = ref(false);
const clickService = (item) => {
  emit("check:servicio", item);

  isSelected.value = !isSelected.value;
};
</script>

<style scoped></style>
