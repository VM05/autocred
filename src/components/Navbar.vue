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
              class="h-8 w-full sm:h-10"
              src="../assets/img/logo-autocred-menu.svg"
              alt="autocred"
            />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <img
              src="../assets/img/menu-hamburguesa.svg"
              alt="Open menu"
              class="h-8 w-8"
            />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden lg:flex">
          <div
            v-for="link in links"
            :key="link"
            class="relative link-width text-center"
          >
            <router-link
              class="text-base font-medium text-primary-700 hover:text-primary-900 hover:cursor-pointer hover:font-semibold"
              :to="link.url"
              :exact-active-class="link.name == 'Contacto' ? '' : 'activeMenu'"
              v-if="link.name != 'Servicios'"
            >
              {{ link.name }}
            </router-link>
            <MenuVue v-else :sublinks="link.sublink">Más Servicios</MenuVue>
          </div>
        </PopoverGroup>
        <div
          class="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0 gap-"
        >
          <!-- <router-link to="/#contacto">
            <Button1 text="Contacto" secondary/>
          </router-link> -->
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
        v-slot="{ close }"
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
                  alt="Autocred"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <img
                    src="../assets/img/menu-cerrar.svg"
                    alt="Cerrar menu"
                    class="h-6 w-6"
                  />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="flex flex-col gap-4 items-center">
                <div v-for="item in links">
                  <router-link
                    v-if="item.name != 'Servicios'"
                    :key="item.name"
                    :to="item.url"
                    class="text-base font-medium text-primary-900 w-full text-center border-b border-primary-900 pb-4 last:border-0"
                    :activeClass="item.name == 'Contacto' ? '' : 'activeMenu'"
                    @click="close"
                  >
                    {{ item.name }}
                  </router-link>
                  <MenuVue
                    v-else
                    :sublinks="item.sublink"
                    mobile
                    :closeFunction="close"
                    >Servicios</MenuVue
                  >
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div>
              <router-link
                to="/login"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-900 hover:bg-primary-700"
                @click="close"
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
} from "@headlessui/vue";

import Button1 from "./Button.vue";
import { links } from "../assets/helpers/constants";
import MenuVue from "./Menu.vue";
</script>
<style>
.activeMenu {
  color: #ba0b7c !important;
  font-weight: 700 !important;
  font-size: 17px !important;
}
.activeMenu:hover {
  font-weight: 700;
}

.link-width {
  min-width: 160px;
}

.link-width:nth-child(1) {
  min-width: 80px;
}

.link-width:nth-child(5) {
  min-width: 140px;
}

.link-width:nth-child(6) {
  min-width: 80px;
}

.link-width:nth-child(7) {
  min-width: 80px;
}
</style>
