<template>
  <div>
    <video
      :width="width"
      :height="height"
      :controls="controls"
      :autoplay="autoplay"
      :muted="muted"
      class="rounded-3xl"
    >
      <source :src="src" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default() {
      return "100%";
    },
  },
  height: {
    type: String,
    default() {
      return "200px";
    },
  },
  src: String,
  controls: Boolean,
  autoplay: Boolean,
  muted: Boolean,
});
</script>

<style scoped>
video {
  height: v-bind(height);
}
</style>
