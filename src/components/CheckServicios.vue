<template>
  <div class="py-6">
    <label class="text-primary-900 font-bold text-base">{{ label }}</label>
    <fieldset
      class="grid pl-3 mt-1 gap-2"
      :class="columnas ? 'pl-0 md:grid-cols-2' : 'grid-cols-1'"
    >
      <div v-for="servicio in items" class="mt-1">
        <InputCheck
          :servicio="servicio"
          @check:servicio="(e) => handleServices(e)"
        />
      </div>
    </fieldset>
  </div>
</template>

<script setup>
import InputCheck from "./InputCheck.vue";
import { ref } from "vue";
import { servicios } from "../assets/helpers/API";

const emit = defineEmits(["update:checkServicios"]);
defineProps({
  label: String,
  columnas: Boolean,
  items: {
    type: Array,
    default: servicios,
  },
});
const selectedService = ref([]);

const handleServices = (servicio) => {
  console.log(selectedService.value.includes(servicio));
  if (selectedService.value.includes(servicio)) {
    selectedService.value = selectedService.value.filter(
      (el) => el != servicio
    );
  } else {
    selectedService.value.push(servicio);
  }
  emit("update:checkServicios", selectedService);
};
</script>

<style lang="scss" scoped></style>
