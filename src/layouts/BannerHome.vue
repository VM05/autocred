<template>
  <div class="w-full flex flex-col md:flex-row mx-auto my-20 px-12">
    <div class="w-1/2">
      <slot name="content"></slot>
    </div>
    <div class="w-1/2">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
