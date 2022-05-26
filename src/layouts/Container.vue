<template>
  <div class="container mx-auto mt-32">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  max-width: 22rem;
}
@media (min-width: 768px) {
  .container {
    max-width: 42rem /* 672px */;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 80rem /* 1280px */;
  }
}
</style>
