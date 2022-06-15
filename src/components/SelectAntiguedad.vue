<template>
  <div class="py-6 w-full">
    <label :for="id" class="text-primary-900 font-medium text-base">{{
      label
    }}</label>
    <Listbox v-model="selected">
      <div class="relative">
        <ListboxButton
          class="px-4 py-2 border border-solid focus-visible:outline-primary-700 rounded-lg w-full text-left"
        >
          <span class="">{{ selected.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ListboxOptions
            class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-primary-700 focus:outline-none sm:text-sm z-10"
          >
            <ListboxOption
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
            </ListboxOption>
          </ListboxOptions>
        </TransitionRoot>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { antiguedad } from "../assets/helpers/API";
import { useSimuladorStore } from "../stores/simulador";
const useSimulador = useSimuladorStore();
const emit = defineEmits(["update:antiguedad"]);

defineProps({
  data: {},
  label: String,
});
const handler = (element) => {
  emit("update:antiguedad", element);
};
let selected = ref(antiguedad[0]);
let query = ref("");
let filteredBrands = computed(() =>
  query.value === ""
    ? antiguedad
    : antiguedad.filter((brand) =>
        brand.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

watch(selected, () => {
  changeAntiguedad(selected.value);
  emit("update:antiguedad", selected.value.value);
});
const changeAntiguedad = (value) => {
  useSimulador.antiguedad = value;
};
</script>
