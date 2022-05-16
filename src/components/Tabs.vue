<template>
  <div class="w-full max-w-md px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex p-1 space-x-1 bg-black-100 rounded-xl">
        <Tab
          v-for="question in Object.keys(questions)"
          as="template"
          :key="question"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-700 ring-black-50 ring-opacity-60',
              selected
                ? 'bg-secondary-900 shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ question }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(answers, idx) in Object.values(questions)"
          :key="idx"
          :class="['bg-white rounded-xl']"
        >
          <Disclosure v-slot="{ open }" v-for="answer in answers">
            <DisclosureButton
              class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mb-2"
            >
              <span>{{ answer.title }}</span>
              <ChevronUpIcon
                :class="open ? 'transform rotate-180' : ''"
                class="w-5 h-5 text-purple-500"
              />
            </DisclosureButton>
            <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
              {{ answer.content }}
            </DisclosurePanel>
          </Disclosure>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";

const questions = ref({
  Transferencias: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      content: "Yes",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet?",
      content: "Yes",
    },
  ],
  Financiamiento: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet?",
      content: "Yes",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      content: "Yes",
    },
  ],
  Refinanciamiento: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      content: "Yes",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      content: "Yes",
    },
  ],
});
</script>
