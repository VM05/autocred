<template>
  <div class="py-6 w-full">
    <label :for="id" class="text-primary-900 font-bold text-base">{{
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

        <ListboxOptions
          class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-primary-700 focus:outline-none sm:text-sm z-10"
        >
          <ListboxOption
            v-for="brand in data.data"
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
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, watch } from "vue";
import axios from "axios";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { useSimuladorStore } from "../stores/simulador";
import { MARCAS_URL } from "../assets/helpers/API";
const useSimulador = useSimuladorStore();
defineProps({
  label: String,
  id: String,
});

const emit = defineEmits(["update:marca"]);
// const handler = (element) => {
//   changeMarca(element);
//   emit("update:marca", element);
// };
const data = ref();
let selected = ref({ name: "Marca" });

const changeMarca = (value) => {
  useSimulador.marca = value;
};

watch(selected, () => {
  changeMarca(selected.value);
  emit("update:marca", selected.value);
});
onMounted(async () => {
  try {
    const marcas = await axios.get(MARCAS_URL);
    data.value = await marcas.data;
  } catch (error) {
    console.log("error");
  }
});

onUpdated(async () => {
  try {
    const response = await axios.get(
      MARCAS_URL + "/" + useSimulador.marca.id + "/models"
    );

    useSimulador.modelos = response.data.data;
  } catch (error) {
    console.log("error");
  }
});
</script>
