<template>
  <Container>
    <div class="flex items-center justify-center w-full">
      <div class="px-40 py-20 bg-white rounded-md shadow-xl">
        <div class="flex flex-col items-center">
          <h1 class="font-bold text-secondary-800 text-9xl">404</h1>

          <h6
            class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
          >
            <span class="text-red-500">Oops!</span> Pagina no encontrada
          </h6>

          <p class="mb-8 text-center text-gray-500 md:text-lg">
            La pagina que estas buscando no existe
          </p>

          <router-link
            to="/"
            class="bg-secondary-900 px-3 py-2 rounded-md text-white font-medium"
          >
            Volver
          </router-link>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import { useHead } from "@vueuse/head";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

useHead({
  title: "Autocred | 404",
  meta: [
    {
      name: "description",
      content:
        "Autocred lo hace fácil. Postula simultáneamente tu crédito con diferentes crediticias y obtén una aprobación en segundos",
    },
  ],
});

onMounted(() => {
  setTimeout(() => {
    router.push({ name: "Home" });
  }, 4000);
});
</script>

<style scoped></style>
