<template>
  <div class="relative py-6 w-full">
    <!-- <span v-show="focus" class="absolute top-0 left-0 text-sm">
      {{ placeholder }}
    </span>
    <span v-show="hover" class="block absolute top-0 right-0 text-black-100">{{
      hoverText
    }}</span> -->
    <label :for="id" class="text-primary-900 font-medium text-base">{{
      label
    }}</label>
    <div v-if="isPhone" class="grid w-full items-center">
      <label
        class="phone border border-solid px-2 py-2 rounded-lg text-primary-900"
        :for="id"
      >
        +56 9</label
      >
      <input
        type="tel"
        maxlength="8"
        :placeholder="placeholder"
        class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full phone-input"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @focusin="focus = true"
        @focusout="focus = false"
        :id="id"
      />
    </div>
    <input
      v-else-if="password"
      type="password"
      :placeholder="placeholder"
      class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @focusin="focus = true"
      @focusout="focus = false"
      :id="id"
      :value="value"
      :disabled="disabled"
    />
    <input
      v-else
      type="text"
      :placeholder="placeholder"
      class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      @focusin="focus = true"
      @focusout="focus = false"
      :id="id"
      :value="value"
      :disabled="disabled"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  placeholder: String,
  hoverText: String,
  id: String,
  label: String,
  isPhone: Boolean,
  value: String,
  disabled: Boolean,
  password: Boolean,
});
const hover = ref(false);
let focus = ref(false);
</script>

<style scoped>
.phone {
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  border-right: 1;
}
.phone-input {
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  border-left: 0;
}
.grid {
  grid-template-columns: auto 1fr;
}
</style>
