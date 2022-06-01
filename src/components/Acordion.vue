<template>
  <div class="w-full">
    <div class="grid gap-4">
      <Heading content="Selecciona tu Cuota" heading-type="h4" />
      <div v-for="(cuota, index) in props.cuotasSimulacion" :v-key="cuota.id">
        <Disclosure
          v-slot="{ open }"
          v-if="cuota.monthly_payment > 0"
          :defaultOpen="index == 0"
        >
          <DisclosureButton
            class="focus:outline-none flex w-full justify-between rounded-lg bg-gray-400 px-4 py-2 text-left text-sm font-medium text-white hover:bg-primary-900"
            :class="open ? 'bg-primary-900' : ''"
          >
            <div class="title flex justify-between w-full">
              <span>{{ cuota.term }} cuotas</span>
              <span>{{ formatNumbers(cuota.monthly_payment) }} /mes</span>
            </div>

            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-white"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div class="grid">
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
                <span>{{ formatNumbers(cuota.loan_amount) }}</span>
              </div>
              <div class="title flex justify-between w-full">
                <span>Costo total del crédito</span>
                <span>{{ formatNumbers(cuota.loan_total) }}</span>
              </div>
              <div
                class="title flex justify-between w-full"
                v-if="cuota.last_payment > 0"
              >
                <span>Valor última cuota (VFMG)</span>
                <span>{{ formatNumbers(cuota.last_payment) }}</span>
              </div>
              <Button
                text="Me interesa"
                secondary
                class="mt-4"
                @click.prevent="handleAccordion(cuota.term, cuota.id)"
              />
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
import { formatNumbers } from "../assets/helpers/validate";
import Button from "./Button.vue";
import { ref } from "vue";
import Heading from "./Heading.vue";

const creditoSmart = ref(false);
const emits = defineEmits(["select:term"]);
const handleAccordion = (cuota, id) => emits("select:term", [cuota, id]);
const props = defineProps({
  cuotasSimulacion: Array,
  typeCredit: String,
});
</script>
