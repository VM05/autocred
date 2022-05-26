<template>
  <div class="maxWidthMobile md:max-w-2xl xl:max-w-7xl mx-auto mt-32">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.maxWidthMobile {
  max-width: 22rem;
}
</style>
