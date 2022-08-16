<template>
  <div class="modal-background fade-in" @click.self="pruebaEmit">
    <div class="modal-container">
      <slot name="header" />
      <slot name="body" />
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["on:close", "pruebaEmit"]);
const pruebaEmit = () => {
  emit("on:close");
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.modal-container {
  margin: 0px 20px;
  width: 550px;
  height: auto;
  padding: 30px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 500px) {
  .modal-container {
    max-width: 400px;
    height: 70%;
    overflow: auto;
  }
}

.fade-in {
  animation: fadeIn ease-out 0.2s;
  -webkit-animation: fadeIn ease-out 0.2s;
  -moz-animation: fadeIn ease-out 0.2s;
  -o-animation: fadeIn ease-out 0.2s;
  -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
