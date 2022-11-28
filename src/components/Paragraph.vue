<template>
  <p :class="color ? 'text-secondary-900': 'text-primary-900'">
    <slot></slot>
  </p>
</template>

<script setup>
 const props = defineProps({
    color: Boolean,
  })
</script>

<style scoped></style>
