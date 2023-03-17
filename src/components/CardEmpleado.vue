<template>
  <div>
    <div>
      <a
        :href="`https://api.whatsapp.com/send?phone=${telefono}`"
        class="bg-white shadow-2xl rounded-3xl px-4 cursor-pointer flex md:flex-col items-center py-4 md:py-10 gap-2 w-full transition hover:scale-105"
        target="_blank"
      >
        <div class="w-1/3 md:w-44">
          <img
            :src="props.data.imagen"
            :alt="props.data.nombre"
            class="imagen-agente md:w-full md:h-44 mx-auto rounded-full"
            v-if="props.data.imagen"
          />
          <div
            v-else
            class="w-20 md:w-44 md:h-44 bg-slate-300 p-10 rounded-full mx-auto"
          ></div>
        </div>
        <div class="md:text-center flex flex-col align-middle w-2/3 md:w-full">
          <div
            class="flex flex-row md:flex-col md:justify-center gap-1 md:gap-0"
          >
            <p class="text-secondary-900 font-bold text-lg">
              {{ props.data.nombre }}
            </p>
            <p class="text-primary-900 font-bold text-lg">
              {{ props.data.apellido }}
            </p>
          </div>
          <div
            class="text-primary-900 font-extralight text-sm flex flex-col justify-between"
          >
            <p class="mb-2">{{ props.data.ubicacion }}</p>
            <div
              class="flex flex-row gap-1 items-center mb-2 md:justify-center"
            >
              <img src="../assets/img/ws.webp" alt="whatsapp" class="h-5" />
              <p>{{ props.data.telefono }}</p>
            </div>

            <p class="mb-2">{{ props.data.email }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: Object,
});

const telefono = props.data.telefono.replace(/[ +]/g, "");
</script>

<style scoped>
a {
  margin-bottom: 5px;
}

@media (max-width: 500px) {
  .imagen-agente {
    width: 90px;
    height: 90px;
  }
}
</style>
