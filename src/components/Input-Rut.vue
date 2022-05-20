<template>
  <div class="relative py-6 w-full">
    <label
      :for="props.id"
      v-if="props.label"
      class="text-primary-900 font-medium text-base"
      >{{ props.label }}</label
    >
    <input
      required
      class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
      type="text"
      :placeholder="props.placeholder"
      v-model="rut"
      @focusin="focus = true"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @focusout="format"
      :id="props.id"
      @blur="handler"
    />
    <span class="text-red-600 block">{{ validated }}</span>
  </div>
</template>

<script setup>
import { ref, computed, onUpdated, unref } from "vue";
import { validateRut, RutFormat, formatRut } from "@fdograph/rut-utilities";
const emit = defineEmits(["update:rut"]);
const handler = (e) => {
  emit("update:rut", e.target.value);
};
const props = defineProps({
  placeholder: String,
  hoverText: String,
  id: String,
  label: String,
  value: {
    type: String,
    default: "",
  },
});
let rut = ref(props.value);
let focus = ref(false);
let hover = ref(false);

const validated = computed(() => {
  if (unref(rut) == "") {
    return "";
  } else {
    return validateRut(unref(rut)) ? "" : "Por favor ingresa un rut valido";
  }
});

const isError = computed(() => {
  return validateRut(unref(rut)) ? false : true;
});

const format = () => {
  focus.value = !focus.value;
  rut.value = formatRut(unref(rut), RutFormat.DOTS_DASH);
};

onUpdated(() => {
  isError;
});
</script>

<style scoped></style>
