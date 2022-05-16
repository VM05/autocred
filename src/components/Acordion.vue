<template>
  <div class="w-full">
    <div class="grid gap-4">
      <Disclosure v-slot="{ open }" v-for="cuota in cuotasSimulacion.data">
        <DisclosureButton
          class="focus:outline-none flex w-full justify-between rounded-lg bg-gray-400 px-4 py-2 text-left text-sm font-medium text-white hover:bg-primary-900"
        >
          <div class="title flex justify-between w-full">
            <span>{{ cuota }} cuotas</span>
            <span>$315.377 /mes</span>
          </div>

          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-white"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div
            class="title flex justify-between w-full"
            v-for="campo in camposSimulacion"
          >
            <span>{{ campo }}</span>
            <span>$315.377 /mes</span>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
import { camposSimulacion } from "../assets/helpers/constants";

const { data: cuotasSimulacion } = await useFetch(
  "http://dev.autocred.cl/api/utilities/others/terms"
);
</script>
