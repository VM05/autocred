<template>
  <div
    class="whitespace-nowrap inline-flex gap-1 items-center justify-center py-2 border border-transparent rounded-lg shadow-sm text-base px-5 font-medium"
    :class="{
      'bg-secondary-900 hover:bg-secondary-700 text-white': secondary,
      'bg-primary-900 hover:bg-primary-700 text-white': primary,
      'bg-transparent text-primary-900 border-2 border-primary-900 hover:bg-primary-900 hover:text-white':
        outlinePrimary,
      'bg-transparent text-secondary-900 border-2 border-secondary-900 hover:bg-secondary-900 hover:text-white':
        outlineSecondary,
      'py-2': user,
      'cursor-pointer': !disabled,
      'bg-black-50 hover:bg-black-50 hover:cursor-not-allowed': disabled,
    }"
  >
    <button
      class="font-medium"
      :class="{ 'text-sm': user, 'hover:cursor-not-allowed': disabled }"
      :type="type"
      :disabled="disabled"
    >
      {{ text }}
    </button>
    <UserIcon class="h-5 w-5" v-if="user" />
  </div>
</template>

<script setup>
import { UserIcon } from "@heroicons/vue/outline";
defineProps({
  text: String,
  user: Boolean,
  primary: Boolean,
  secondary: Boolean,
  outlinePrimary: Boolean,
  outlineSecondary: Boolean,
  type: String,
  disabled: Boolean,
});
</script>

<style scoped></style>
