<template>
  <div class="mb-52 md:px-12">
    <Heading content="Financia tu próximo vehículo con Autocred" />
    <Heading
      content="Descubre los beneficios"
      headingType="h3"
      class="border-b mb-10 pb-4"
    />
    <FeaturesList :data="featuresCompradoress" />
  </div>
</template>

<script setup>
import Heading from "../../components/Heading.vue";
import { featuresCompradoress } from "../../assets/helpers/constants";
import FeaturesList from "../../components/FeaturesList.vue";
</script>

<style scoped></style>
