<template>
  <div class="w-full">
    <div class="grid gap-4">
      <div v-for="cuota in props.cuotasSimulacion" :v-key="cuota.id">
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="focus:outline-none flex w-full justify-between rounded-lg bg-gray-400 px-4 py-2 text-left text-sm font-medium text-white hover:bg-primary-900"
          >
            <div class="title flex justify-between w-full">
              <span>{{ cuota.term }} cuotas</span>
              <span>{{ cuota.monthly_payment }} /mes</span>
            </div>

            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-white"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div class="title flex justify-between w-full">
              <span>CAE</span>
              <span>{{ cuota.indicator }} %</span>
            </div>
            <div class="title flex justify-between w-full">
              <span>Tasa de interés</span>
              <span>{{ cuota.interest_rate }} %</span>
            </div>
            <div class="title flex justify-between w-full">
              <span>Monto total a financiar</span>
              <span>$ {{ cuota.loan_amount }}</span>
            </div>
            <div class="title flex justify-between w-full">
              <span>Costo total del crédito</span>
              <span>$ {{ cuota.loan_total }}</span>
            </div>
            <div
              class="title flex justify-between w-full"
              :v-if="cuota.type == 'smart'"
            >
              <span>Valor última cuota (VFMG)</span>
              <span>$ {{ cuota.last_payment }}</span>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
import { camposSimulacion } from "../assets/helpers/constants";

const props = defineProps({
  cuotasSimulacion: Array,
});
</script>
