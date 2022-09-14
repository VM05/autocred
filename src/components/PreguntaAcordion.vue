<template>
  <div
    class="w-full bg-white rounded-lg border-2"
    :class="{
      'border-secondary-900': secondary,
      'border-primary-900': primary,
    }"
  >
    <Disclosure :default-open="llave === 0" v-slot="{ open }">
      <DisclosureButton
        class="flex w-full py-2 px-2 md:px-4 md:py-7 text-left text-lg font-medium text-white items-center gap-2"
        :class="{
          'bg-secondary-900': secondary,
          'bg-primary-900': primary,
          //'opacity-70': !open,
        }"
      >
        <MinusCircleIcon v-if="open" class="w-8 md:w-10 text-white" />
        <PlusCircleIcon v-else="open" class="w-8 md:w-10 text-white" />
        <span>{{ data.title }}</span>
      </DisclosureButton>

      <DisclosurePanel
        class="px-12 py-8 text-lg text-gray-500 font-medium"
        v-html="data.content"
      >
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/vue/outline";

defineProps({
  data: Object,
  primary: Boolean,
  secondary: Boolean,
  llave: Number,
});
</script>
