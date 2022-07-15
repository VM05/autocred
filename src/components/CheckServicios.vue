<template>
  <div class="py-6">
    <label class="text-primary-900 font-bold text-base">{{ label }}</label>
    <fieldset class="grid grid-cols-1 md:grid-cols-2 pl-3 mt-1 gap-2">
      <div v-for="servicio in servicios" class="mt-1">
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
import { servicios } from "../assets/helpers/API";
import { ref } from "vue";

const emit = defineEmits(["update:checkServicios"]);
defineProps({
  label: String,
});
const selectedService = ref([]);

const handleServices = (servicio) => {
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
