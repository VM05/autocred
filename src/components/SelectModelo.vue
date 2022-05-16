<template>
  <div class="py-6 w-full">
    <Combobox v-model="selected">
      <div class="relative">
        <ComboboxInput
          class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
          :displayValue="(brand) => brand.name"
        />
        <ComboboxButton
          class="absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        <ComboboxOptions
          class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-primary-700 focus:outline-none sm:text-sm z-10"
        >
          <ComboboxOption
            v-for="model in useSimulador.modelos"
            as="template"
            :key="model.id"
            :value="model"
            v-slot="{ selected, active }"
            @click="changeModelo(model)"
          >
            <li
              class="cursor-pointer select-none relative py-2 pl-10 pr-4"
              :class="{
                'text-white bg-primary-900': active,
                'text-primary-900': !active,
              }"
            >
              <span
                class="block truncate"
                :class="{ 'font-medium': selected, 'font-normal': !selected }"
              >
                {{ model.name }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3"
                :class="{ 'text-white': active }"
              >
                <CheckIcon
                  class="w-5 h-5 text-secondary-900"
                  aria-hidden="true"
                />
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </div>
    </Combobox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { useSimuladorStore } from "../stores/simulador";
const useSimulador = useSimuladorStore();

let selected = ref({ name: "Modelo" });

const changeModelo = (value) => {
  useSimulador.modelo = value;
};
</script>
