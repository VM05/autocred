<template>
  <router-link
    as="div"
    to="/servicios"
    class="flex flex-row text-base font-medium text-primary-700 hover:text-primary-900 hover:cursor-pointer hover:font-semibold"
    activeClass="activeMenu"
    @mouseover="toogleMenu"
    @click="hideMenu"
    v-if="!mobile"
  >
    <slot></slot>
    <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
  </router-link>
  <div
    v-show="active"
    class="absolute right-1/2 left-1/2 mt-2 w-48 -ml-24 rounded-md grid grid-flow-row gap-2 bg-secondary-500"
    @mouseleave="toogleMenu"
    v-if="!mobile"
  >
    <router-link
      v-for="item in props.sublinks"
      class="text-primary-700 hover:bg-primary-900 hover:text-white px-3 py-3 rounded-md"
      :to="{ name: 'Servicios', params: { active: item.link } }"
    >
      {{ item.name }}
    </router-link>
  </div>

  <router-link
    as="div"
    to="/servicios"
    class="flex flex-row text-base font-medium text-primary-700 hover:text-primary-900 hover:cursor-pointer hover:font-semibold justify-center items-center"
    activeClass="activeMenu"
    @click="toogleMenu"
    v-if="mobile"
  >
    <slot></slot>
    <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
  </router-link>
  <div class="flex flex-col items-center gap-4" :class="{ 'mt-3': active }">
    <router-link
      v-show="active"
      v-for="item in props.sublinks"
      as="div"
      :to="{ name: 'Servicios', params: { active: item.link } }"
      class="text-base font-medium text-primary-700 hover:text-primary-900 hover:cursor-pointer hover:font-semibold"
      activeClass="activeMenu"
      v-if="mobile"
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
  mobile: Boolean,
});
const active = ref(false);
const toogleMenu = () => (active.value = !active.value);
const hideMenu = () => (active.value = false);
</script>

<style scoped></style>
