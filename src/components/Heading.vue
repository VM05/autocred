<template>
  <component
    :is="headingType"
    class="font-semibold text-primary-900"
    :class="{
      'text-primary-900': primary,
      'text-secondary-900': secondary,
      'text-white': white,
    }"
  >
    {{ content }}
  </component>
</template>

<script setup>
defineProps({
  headingType: {
    type: String,
    default: "h2", // you can pass anything from 'h1' to 'h6' here
  },
  content: {
    type: String,
  },
  primary: Boolean,
  secondary: Boolean,
  white: Boolean,
});
</script>

<style scoped>
.text-white {
  color: white;
}
h1 {
  font-size: 24px;
}
h2 {
  font-size: 20px;
}
h3 {
  font-size: 18px;
}
h4 {
  font-size: 16px;
}
h5 {
  font-size: large;
}
h6 {
  font-size: medium;
}
.text-white {
  color: white;
}
@media (min-width: 1024px) {
  h1 {
    font-size: 45px;
  }
  h2 {
    font-size: 35px;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: large;
  }
  h6 {
    font-size: medium;
  }
}
</style>
