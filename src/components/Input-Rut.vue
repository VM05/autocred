<template>
  <div class="relative py-6 w-full">
    <label
      :for="props.id"
      v-if="props.label"
      class="text-primary-900 font-bold text-base"
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
      :id="props.id"
      @blur="handler"
      @keyup="handler"
      @input="format"
    />
    <span
      class="text-red-700 block text-center absolute left-1/2 -translate-x-1/2 w-full"
      >{{ validated }}</span
    >
  </div>
</template>

<script setup>
import { ref, computed, onUpdated, unref, watch } from "vue";
import { validateRut, RutFormat, formatRut } from "@fdograph/rut-utilities";
const emit = defineEmits(["update:rut", "textvalue", "validRut"]);
const handler = (e) => {
  isError;

  emit("update:rut", e.target.value);
  emit("textvalue", e.target.value);
  emit("validRut", validRut.value);
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
const validRut = ref(false);

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
  // rut.value = formatRut(unref(rut), RutFormat.DOTS_DASH);
  let Fn = {
    validaRut: function (rutCompleto) {
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
      let tmp = rutCompleto.split("-");
      let digv = tmp[1];
      let rut = tmp[0];
      if (digv == "K") digv = "k";
      return Fn.dv(rut) == digv;
    },
    dv: function (T) {
      let M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    },
  };

  rut.value = rut.value.replace(/[^kK0-9\_]/g, "");
  let value = rut.value;

  if (value.length > 1) {
    value =
      value.substring(0, value.length - 1) +
      "-" +
      value.substring(value.length - 1, value.length);
  }
  if (value.length > 5) {
    value =
      value.substring(0, value.length - 5) +
      "." +
      value.substring(value.length - 5, value.length);
  }
  if (value.length > 9) {
    value =
      value.substring(0, value.length - 9) +
      "." +
      value.substring(value.length - 9, value.length);
  }
  rut.value = value;
  if (value.length >= 11) {
    let valor = value.replace(".", "").replace(".", "");
    Fn.validaRut(valor);
  }
};

onUpdated(() => {
  isError;
});

watch(rut, () => {
  validRut.value = validateRut(rut.value);
});
</script>

<style scoped></style>
