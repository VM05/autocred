<template>
  <div class="mb-52">
    <Heading content="Ya vendiste tu auto?" />
    <Heading
      content="Financia el otro con Autocred"
      headingType="h3"
      class="border-b mb-10"
    />
    <FeaturesList :data="featuresVendedores" />
  </div>
</template>

<script setup>
import Heading from "../../components/Heading.vue";
import { featuresVendedores } from "../../assets/helpers/constants";
import FeaturesList from "../../components/FeaturesList.vue";
</script>

<style scoped></style>
