<template>
  <div class="w-full py-6">
    <label :for="id" class="block text-primary-900 font-medium text-base">{{
      label
    }}</label>
    <textarea
      name="comentarios"
      rows="5"
      cols="40"
      class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
      :id="id"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
});
</script>
