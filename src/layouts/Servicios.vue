<template>
  <div class="mb-24 md:px-12">
    <Heading
      content="Servicios para compradores y vendedores "
      class="mb-8"
      v-if="title"
      highlight="Servicios"
      highlightImg="servicios"
    />
    
    <Heading
      content="Compradores"
      class="pb-4 border-b mb-8 font-bold"
      :class="{ 'mb-1': descriptionCompradores }"
      headingType="h3"
    />
    <p
      v-if="descriptionCompradores"
      class="mb-12 font-medium text-primary-900 text-lg"
    >
      {{ descriptionCompradores }}
    </p>

    <ServiciosList :data="serviciosCompradores" servicio="comprador" />

    <Heading
      content="Vendedores"
      class="pb-4 border-b mb-8 mt-8 font-bold"
      :class="{ 'mb-1': descriptionVendedores }"
      headingType="h3"
    />
    <p
      v-if="descriptionVendedores"
      class="mb-12 font-medium text-primary-900 text-lg"
    >
      {{ descriptionVendedores }}
    </p>
    <ServiciosList
      :data="serviciosVendores"
      right
      class="mb-8"
      servicio="vendedor"
    />
  </div>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import ServiciosList from "../components/ServiciosList.vue";
import {
  serviciosVendores,
  serviciosCompradores,
} from "../assets/helpers/constants";

defineProps({
  descriptionVendedores: String,
  descriptionCompradores: String,
  title: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped></style>
