<template>
  <div
    class="w-full flex flex-col-reverse md:flex-row mx-auto my-20 px-8 md:px-12"
  >
    <div class="md:w-1/2">
      <slot name="content"></slot>
    </div>
    <div class="md:w-1/2 mb-4 md:mb-0">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
