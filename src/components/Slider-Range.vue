<template>
  <div class="w-full">
    <!-- TODO: Modelar INPUT -->
    <!-- <Input v-model="value" /> -->
    <div class="relative py-6 w-full">
      <input
        v-if="props.valorTotal"
        v-model="formatValue"
        class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
        type="text"
        min="1000000"
        max="99999999"
        placeholder="$1.000.000"
        @blur="format"
      />
      <input
        v-else
        v-model="formatValue"
        class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
        type="text"
        min="1000000"
        max="10000000"
        placeholder="$1.000.000"
        @blur="format"
      />
    </div>

    <Slider
      v-if="props.valorTotal"
      v-model="value"
      class="slider-red secon"
      :max="99_999_999"
      :min="1_000_000"
      :merge="100"
      :step="50_000"
      :format="{ prefix: '$' }"
      :tooltips="false"
    />
    <Slider
      v-else
      v-model="value"
      class="slider-red secon"
      :max="20_000_000"
      :min="1_000_000"
      :merge="100"
      :step="50_000"
      :format="{ prefix: '$' }"
      :tooltips="false"
    />
  </div>
</template>

<script setup>
import Slider from "@vueform/slider";
import Input from "./Form/Input.vue";
import { ref, unref, computed, watch } from "vue";
const emits = defineEmits(["update:slider"]);
const props = defineProps({
  valorTotal: Boolean,
});
const value = ref(0);
// const formatValue = computed(() => "$" + unref(value));
const formatValue = computed(() =>
  new Intl.NumberFormat("es-CL", { currency: "CLP", style: "currency" }).format(
    unref(value)
  )
);

const format = (e) => {
  if (e.target.value.includes("$")) {
    let desFormat = e.target.value.replaceAll("$", "").replaceAll(".", "");
    value.value = desFormat;
    const res = new Intl.NumberFormat("es-CL", {
      currency: "CLP",
      style: "currency",
    }).format(desFormat);
    e.target.value = res;
  } else {
    value.value = e.target.value;
    const res = new Intl.NumberFormat("es-CL", {
      currency: "CLP",
      style: "currency",
    }).format(e.target.value);
    e.target.value = res;
  }
};

watch(value, () => {
  emits("update:slider", value.value.toString());
});
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
.slider-red {
  --slider-connect-bg: rgb(212, 15, 125);
  --slider-tooltip-bg: rgb(212, 15, 125);
  --slider-handle-ring-color: rgb(212, 15, 125);
}
</style>
