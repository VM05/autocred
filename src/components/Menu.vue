<template>
  <span
    as="div"
    class="flex flex-row text-base justify-center font-medium text-primary-700 hover:text-primary-900 hover:cursor-pointer hover:font-semibold"
    :class="activo? 'activeMenu': ''"
    @mouseover="toogleMenu"
    @click="hideMenu"
    v-if="!mobile"
  >
    <slot></slot>
    <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5 pointer-events-none" aria-hidden="true" />
</span>
  <div
    v-show="active"
    class="absolute right-1/2 left-1/2 mt-2 w-48 -ml-24 rounded-md grid grid-flow-row gap-2 bg-secondary-500"
    @mouseleave="toogleMenu"
    v-if="!mobile"
  >
    <router-link
      v-for="item in props.sublinks"
      class="text-primary-700 hover:bg-primary-900 hover:text-white px-3 py-3 rounded-md"
      activeClass="activeMenu"
      :to="{
        // name:'Servicios',
        name: `servicio${item.link}`,
        params: { active: item.link },
        // hash: `#${item.link}`,
      }"
    >
      {{ item.name }}
    </router-link>
  </div>

  <span
    as="div"
    class="flex flex-row text-base font-medium text-primary-700 hover:text-primary-900 hover:cursor-pointer hover:font-semibold justify-center items-center"
    :class="activo? 'activeMenu': ''"
    @click="toogleMenu"
    v-if="mobile"
  >
    <slot></slot>
    <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
</span>
  <div
    class="md:hidden flex flex-col items-center gap-4"
    :class="{ 'mt-3': active }"
  >
    <router-link
      v-show="active"
      v-for="item in props.sublinks"
      as="div"
      :to="{
        // name:'Servicios',
        name: `servicio${item.link}`,
        params: { active: item.link },
        // hash: `#${item.link}`,
      }"
      class="text-base font-medium text-primary-700 hover:text-primary-900 hover:cursor-pointer hover:font-semibold"
      activeClass="activeMenu"
      v-if="mobile"
      @click="closeFunction"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { useRoute } from "vue-router";

const props = defineProps({
  sublinks: Array,
  mobile: Boolean,
  closeFunction: Function,
});
const route = useRoute();
const activo = ref(false)
const active = ref(false);
const toogleMenu = () => (active.value = !active.value);
const hideMenu = () => (active.value = false);

onMounted(()=>{
  console.log(route.fullPath)
})
watch(
  () => route.fullPath,
  () => {
    route.fullPath.includes('servicios') ? activo.value = true : activo.value = false;
  })

</script>

<style scoped></style>
