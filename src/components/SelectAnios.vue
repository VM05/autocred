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
          <span class="">{{ selected }}</span>
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
              v-for="(anio, index) in data.data"
              as="template"
              :key="index"
              :value="anio"
              v-slot="{ selected, active }"
              @click="handler(anio)"
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
                  {{ anio }}
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
import { ref, onMounted, watch } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import axios from "axios";
import { ANIOS_VEHICULOS_URL } from "../assets/helpers/API";
import { useSimuladorStore } from "../stores/simulador";
const useSimulador = useSimuladorStore();

defineProps({
  label: String,
  id: String,
});
const emit = defineEmits(["update:anio"]);
const data = ref();
const handler = (element) => emit("update:anio", element);
onMounted(async () => {
  try {
    const marcas = await axios.get(ANIOS_VEHICULOS_URL);
    data.value = await marcas.data;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
});

let selected = ref(2022);
let query = ref("");

watch(selected, () => {
  changeAnio(selected.value);
  emit("update:anio", selected.value);
});

const changeAnio = (value) => {
  useSimulador.anio = value;
};
</script>
