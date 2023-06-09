<template>
  <div class="py-6">
    <label class="text-primary-900 font-medium text-base">{{ label }}</label>
    <Combobox v-model="selected">
      <div class="relative">
        <ComboboxInput
          class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full"
          :displayValue="(brand) => brand.name"
          @change="query = $event.target.value"
        />
        <ComboboxButton
          class="absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-primary-700 focus:outline-none sm:text-sm z-10"
          >
            <div
              v-if="filteredBrands.length === 0 && query !== ''"
              class="cursor-default select-none relative py-2 px-4 text-gray-700"
            >
              No encontrado
            </div>

            <ComboboxOption
              v-for="brand in filteredBrands"
              as="template"
              :key="brand.id"
              :value="brand"
              v-slot="{ selected, active }"
            >
              <li
                class="cursor-pointer select-none relative py-2 pl-10 pr-4"
                :class="{
                  'text-white bg-primary-900': active,
                  'text-primary-900': !active,
                }"
                @click="handler(brand.name)"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ brand.name }}
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
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { dataServicios } from "../assets/helpers/constants";
import { useContactoStore } from "../stores/contacto";

const emit = defineEmits(["update:servicio"]);

defineProps({
  data: {},
  label: String,
});

const useContacto = useContactoStore();

const handler = (element) => {
  emit("update:servicio", element);
};
let selected = ref(dataServicios[0]);
let query = ref("");
let filteredBrands = computed(() =>
  query.value === ""
    ? dataServicios
    : dataServicios.filter((brand) =>
        brand.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

watch(useContacto, () => {
  selected.value = useContacto.selectService;
});
</script>
