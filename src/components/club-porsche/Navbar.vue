<template>
  <div class="bg-white fixed top-0 left-0 w-full z-50 py-4">
    <ContainerVue>
      <div class="flex flex-row justify-between w-full menu bg-white">
        <a href="https://www.autocred.cl" id="imagen-autocred">
          <img
            src="../../assets/img/logo-autocred-menu.svg"
            alt="Autocred"
            class="h-6 xl:h-12 w-auto"
          />
        </a>
        <!-- <a href="https://www.amotor.cl/" target="_blank">
          <img
            src="../../assets/img/amotor.png"
            alt="Yapo"
            class="h-6 xl:h-8 w-auto"
          />
        </a> -->
      </div>
    </ContainerVue>
  </div>
</template>

<script setup>
import ContainerVue from "./Container.vue";
</script>

<style scoped></style>
