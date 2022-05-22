<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="bg-white fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center py-6 lg:justify-between md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Autocred</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="../assets/img/logo-autocred-menu.svg"
              alt=""
            />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-900"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden lg:flex space-x-10">
          <div v-for="link in links" :key="link" class="relative">
            <router-link
              class="text-base font-medium text-primary-700 hover:text-primary-900 hover:cursor-pointer hover:font-semibold"
              :to="link.url"
              activeClass="activeMenu"
              v-if="link.name != 'Servicios'"
            >
              {{ link.name }}
            </router-link>
            <Menu v-else as="div" class="">
              <MenuButton>
                <div
                  class="flex flex-row text-base font-medium text-primary-700 hover:text-primary-900 hover:cursor-pointer hover:font-semibold"
                >
                  {{ link.name }}
                  <ChevronDownIcon
                    class="ml-2 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </div>
              </MenuButton>
              <MenuItems
                class="absolute right-1/2 left-1/2 mt-2 w-48 -ml-24 rounded-md grid grid-flow-row gap-2 bg-secondary-500"
              >
                <MenuItem
                  v-for="sublink in link.sublink"
                  class="text-primary-700 hover:bg-primary-900 hover:text-white px-3 py-3 rounded-md"
                >
                  <router-link :to="link.url + sublink.link">
                    {{ sublink.name }}
                  </router-link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </PopoverGroup>
        <div class="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
          <router-link to="/login">
            <Button1 text="Ingresar" outlinePrimary user class="text-lg" />
          </router-link>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-2 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-12 w-auto"
                  src="../assets/img/autocred.png"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-900"
                >
                  <span class="sr-only">Cerrar menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="flex flex-col gap-4 items-center">
                <router-link
                  v-for="item in links"
                  :key="item.name"
                  :to="item.url"
                  class="text-base font-medium text-primary-900 w-full text-center border-b border-primary-900 pb-4 last:border-0"
                >
                  {{ item.name }}
                </router-link>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div>
              <router-link
                to="/login"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-900 hover:bg-primary-700"
              >
                Ingresar
              </router-link>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";

import { ChevronDownIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
import Button1 from "./Button.vue";
import { links } from "../assets/helpers/constants";
</script>
<style>
.activeMenu {
  color: #ba0b7c !important;
  font-weight: 700 !important;
  font-size: 18px !important;
}
.activeMenu:hover {
  font-weight: 700;
}
</style>
