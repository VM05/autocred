<template>
  <router-link
    as="div"
    to="/servicios"
    class="flex flex-row text-base font-medium text-primary-700 hover:text-primary-900 hover:cursor-pointer hover:font-semibold"
    activeClass="activeMenu"
    @mouseenter="toogleMenu"
  >
    <slot></slot>
    <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
  </router-link>
  <div
    v-show="active"
    class="absolute right-1/2 left-1/2 mt-2 w-48 -ml-24 rounded-md grid grid-flow-row gap-2 bg-secondary-500"
    @mouseleave="toogleMenu"
  >
    <router-link
      v-for="item in props.sublinks"
      class="text-primary-700 hover:bg-primary-900 hover:text-white px-3 py-3 rounded-md"
      :to="{ name: 'Servicios', params: { active: item.link } }"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
const props = defineProps({
  sublinks: Array,
});
const active = ref(false);
const toogleMenu = () => (active.value = !active.value);
</script>

<style scoped></style>
