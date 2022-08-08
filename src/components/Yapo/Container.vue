import { useHead } from '@vueuse/head';
<template>
  <div class="max-w-xs md:max-w-2xl xl:max-w-7xl mx-auto pt-2">
    <slot />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Autocred | Servicios",
  meta: [
    {
      name: "description",
      content:
        "Te acompañamos en la compra de tu próximo vehículo usado, realizamos el pago inmediato al vendedor y puedes pagar el pie con transferencia, tarjeta de débito o crédito.",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
