<template>
  <Container id="Footer" class="mb-20">
    <div class="bg-white grid grid-cols-3">
      <div class="documentos border-x-2 px-12 pt-5 gap-6 flex flex-col">
        <div id="documentosLegales">
          <Heading content="Documentos Legales" headingType="h5" />
          <router-link
            class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
            to="/"
          >
            Terminos y condiciones
          </router-link>
        </div>
        <div id="somosAutocred">
          <Heading content="Somos Autocred" headingType="h5" />
          <div class="flex flex-col">
            <router-link
              v-for="link in links"
              :key="link"
              class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
              :to="link.url"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="contacto border-r-2 px-12 pt-5 gap-6 flex flex-col">
        <div id="casaMatriz">
          <Heading content="Casa Matriz" headingType="h5" />
          <a
            href=""
            class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
          >
            {{ direcciones[0].direccion }}
          </a>
        </div>
        <div id="contacto">
          <Heading content="Contacto" headingType="h5" />
          <p
            class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
          >
            {{ direcciones[0].telefono }}
          </p>
          <p
            class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
          >
            {{ direcciones[0].correo }}
          </p>
        </div>
      </div>
      <div class="redes border-r-2 px-12 pt-5">
        <Heading content="Redes Sociales" headingType="h5" class="mb-2" />
        <div class="flex flex-col gap-2">
          <router-link v-for="red in rrss" :to="red.url">
            <div class="flex flex-row gap-2 items-center">
              <img :src="red.src" alt="" class="w-5 h-5" />
              <p
                class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer capitalize"
              >
                {{ red.name }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </Container>
  <div class="bg-primary-900 grid place-content-center py-6">
    <img src="../assets/img/logo-autocred-footer.svg" alt="" />
  </div>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import { links, rrss } from "../assets/helpers/constants";
import Container from "../layouts/Container.vue";
import { direcciones } from "../assets/helpers/API";
</script>

<style lang="scss" scoped></style>
