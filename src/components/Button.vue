<template>
  <div
    class="whitespace-nowrap inline-flex gap-1 items-center justify-center border border-transparent rounded-lg shadow-sm text-base font-medium transition-colors"
    :class="{
      'hover:bg-secondary-900 bg-secondary-700 text-white': secondary,
      'hover:bg-primary-900 bg-primary-700 text-white': primary,
      'hover:bg-whatsapp-900 bg-whatsapp-700 text-white': whatsapp,
      'hover:bg-red-600 bg-red-700 text-white': danger,
      'bg-transparent text-primary-900 border-2 border-primary-900 hover:bg-primary-900 hover:text-white':
        outlinePrimary,
      'bg-transparent text-secondary-900 border-2 border-secondary-900 hover:bg-secondary-900 hover:text-white':
        outlineSecondary,
      '': user,
      'cursor-pointer': !disabled,
      'bg-black-50 hover:bg-black-50 hover:cursor-not-allowed border-black-50':
        disabled,
    }"
  >
    <button
      class="font-medium py-3 px-5 flex flex-row w-full justify-center"
      :class="{
        'text-sm': user,
        'hover:cursor-not-allowed text-white': disabled,
      }"
      :type="type"
      :disabled="disabled"
    >
      {{ text }}
      <UserIcon class="h-5 w-5" v-if="user" />
    </button>
  </div>
</template>

<script setup>
import { UserIcon } from "@heroicons/vue/outline";
defineProps({
  text: String,
  user: Boolean,
  primary: Boolean,
  secondary: Boolean,
  whatsapp: Boolean,
  danger: Boolean,
  outlinePrimary: Boolean,
  outlineSecondary: Boolean,
  type: String,
  disabled: Boolean,
});
</script>

<style scoped></style>
