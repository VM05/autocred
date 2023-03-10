<template>
  <RadioGroup v-model="plan" @click="handleVehiculo">
    <RadioGroupLabel class="text-primary-900 mb-4 inline-block pt-6 font-bold"
      >¿Ya sabes que vehículo deseas comprar?</RadioGroupLabel
    >
    <div class="flex md:flex-row flex-col gap-5">
      <RadioGroupOption
        v-for="plan in plans"
        :key="plan"
        :value="plan"
        as="template"
        v-slot="{ checked }"
      >
        <div class="flex flex-row items-center gap-1">
          <span
            tabindex="0"
            class="w-5 h-5 border-2 border-gray-400 rounded-md focus-within:border-primary-900"
            v-show="!checked"
          />

          <CheckIcon
            v-show="checked"
            class="w-5 h-5 text-secondary-900 border-2 border-gray-400 rounded-md"
            aria-hidden="true"
          />
          {{ plan }}
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup>
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/solid";

const emit = defineEmits(["vehiculoComprar"]);
const plans = ["si", "no"];
const plan = ref(plans[0]);

const handleVehiculo = () => {
  emit("vehiculoComprar", plan.value);
};
</script>
