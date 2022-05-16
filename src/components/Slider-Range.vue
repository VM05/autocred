<template>
  <div class="w-full">
    <Input :value="formatValue" disabled />
    <Slider
      v-model="value"
      class="slider-red secon"
      :max="100"
      :min="10"
      :merge="100"
      :step="10"
      :format="{ prefix: '$' }"
      showTooltip="focus"
    />
  </div>
</template>

<script setup>
import Slider from "@vueform/slider";
import Input from "./Form/Input.vue";
import { ref, unref, computed } from "vue";

const value = ref(0);
const formatValue = computed(() => "$" + unref(value));
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
.slider-red {
  --slider-connect-bg: rgb(212, 15, 125);
  --slider-tooltip-bg: rgb(212, 15, 125);
  --slider-handle-ring-color: rgb(212, 15, 125);
}
</style>
