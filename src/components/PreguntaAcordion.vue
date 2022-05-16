<template>
  <div
    class="w-full bg-white rounded-lg border-2"
    :class="{
      'border-secondary-900': secondary,
      'border-primary-900': primary,
    }"
  >
    <Disclosure v-slot="{ open }">
      <DisclosureButton
        class="flex w-full px-4 py-7 text-left text-lg font-medium text-white items-center"
        :class="{ 'bg-secondary-900': secondary, 'bg-primary-900': primary }"
      >
        <MinusCircleIcon v-if="open" class="h-w-10 w-10 text-white" />
        <PlusCircleIcon v-else="open" class="h-w-10 w-10 text-white" />
        <span>{{ data.title }}</span>
      </DisclosureButton>
      <DisclosurePanel class="px-12 py-8 text-lg text-gray-500 font-medium">
        {{ data.content }}
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
});
</script>
