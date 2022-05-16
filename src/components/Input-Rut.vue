<template>
  <div class="relative py-6 w-full">
    <span v-show="focus" class="absolute top-0 left-0 text-sm">
      {{ placeholder }}
    </span>
    <span v-show="hover" class="block absolute top-0 right-0 text-black-100">{{
      hoverText
    }}</span>
    <label
      :for="id"
      v-if="label"
      class="text-primary-900 font-medium text-base"
      >{{ label }}</label
    >
    <input
      required
      class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
      type="text"
      :placeholder="placeholder"
      v-model="rut"
      @focusin="focus = true"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @focusout="format"
      :id="id"
    />
    <span class="text-red-600 block">{{ validated }}</span>
  </div>
</template>

<script setup>
import { ref, computed, onUpdated, unref } from "vue";
import { validateRut, RutFormat, formatRut } from "@fdograph/rut-utilities";
defineProps({
  placeholder: String,
  hoverText: String,
  id: String,
  label: String,
});
let rut = ref("");
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
