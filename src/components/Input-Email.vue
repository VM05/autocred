<template>
  <div class="relative py-6 w-full">
    <label :for="props.id" class="text-primary-900 font-medium text-base">{{
      props.label
    }}</label>
    <!-- <span v-show="focus" class="absolute top-0 left-0 text-sm">
      {{ placeholder }}
    </span>
    <span v-show="hover" class="block absolute top-0 right-0 text-black-100">{{
      hoverText
    }}</span> -->
    <input
      required
      class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
      type="email"
      :placeholder="props.placeholder"
      v-model="email"
      @focusin="focus = true"
      @focusout="focus = false"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      valor="valor"
      :id="props.id"
      @blur="handler"
    />
    <!-- <span
      class="absolute w-full -bottom-6 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
      >{{ validated }}</span
    > -->
  </div>
</template>

<script setup>
import { validateEmail } from "../assets/helpers/validate";
import { ref, computed, onUpdated, unref, watch } from "vue";
import { Input } from "postcss";
const props = defineProps({
  placeholder: String,
  hoverText: String,
  id: String,
  label: String,
  value: { type: String, default: "" },
  valor: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:email", "textvalue"]);
const handler = (e) => {
  emit("update:email", e.target.value);
  emit("textvalue", e.target.value);
};
const email = ref(props.value);
const focus = ref(false);
const hover = ref(false);

const validated = computed(() => {
  if (unref(email) == "") {
    return "";
  } else {
    return validateEmail(email.value)
      ? ""
      : "Por favor ingresa una direccion de correo valida";
  }
});

const isError = computed(() => {
  return validateEmail(unref(email)) ? false : true;
});

onUpdated(() => {
  isError;
});

watch(props, () => {
  if (props.value != "") {
    email.value = props.value;
  }
});
</script>

<style scoped></style>
