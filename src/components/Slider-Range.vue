<template>
  <div class="w-full">
    <!-- TODO: Modelar INPUT -->
    <!-- <Input v-model="value" /> -->
    <input v-model="value" />
    <Slider
      v-if="props.valorTotal"
      v-model="value"
      class="slider-red secon"
      :max="99_999_999"
      :min="1_000_000"
      :merge="100"
      :step="50_000"
      :format="{ prefix: '$' }"
      showTooltip="focus"
    />
    <Slider
      v-else
      v-model="value"
      class="slider-red secon"
      :max="7_000_000"
      :min="1_000_000"
      :merge="100"
      :step="50_000"
      :format="{ prefix: '$' }"
      showTooltip="focus"
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
