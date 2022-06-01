<template>
  <Container id="Footer" class="mb-4 md:mb-20">
    <div class="bg-white flex flex-col md:grid md:grid-cols-3 px-4 md:px-0">
      <div
        class="documentos md:border-x-2 xl:px-12 md:px-5 pt-5 gap-6 flex flex-col"
      >
        <div id="documentosLegales">
          <Heading content="Documentos Legales" headingType="h5" />
          <a
            class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
            href="/pdf/Autocred_Terminos_y_condiciones.pdf"
            target="_blank"
          >
            Términos y condiciones
          </a>
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
      <div
        class="contacto md:border-r-2 xl:px-12 md:px-5 pt-5 gap-6 flex flex-col"
      >
        <div id="casaMatriz">
          <Heading content="Casa Matriz" headingType="h5" />
          <a
            href="https://www.google.cl/maps/place/Spaces/@-33.4145955,-70.603794,17z/data=!3m1!4b1!4m5!3m4!1s0x9662cf4212304611:0xa573dcf4ad3a9b63!8m2!3d-33.4146!4d-70.6016"
            class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
            target="_blank"
          >
            El Bosque Norte 0211, Piso 3 (Spaces), Las Condes, RM
          </a>
        </div>
        <div id="contacto">
          <Heading content="Contacto" headingType="h5" />
          <a
            class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
            href="mailto:mail@autocred.cl"
          >
            contacto@autocred.cl
          </a>
        </div>
      </div>
      <div class="redes md:border-r-2 xl:px-12 md:px-5 pt-5">
        <Heading content="Redes Sociales" headingType="h5" class="mb-2" />
        <div class="flex flex-col gap-2">
          <a v-for="red in rrss" :href="red.url" target="_blank">
            <div class="flex flex-row gap-2 items-center">
              <img :src="red.src" alt="" class="w-5 h-5" />
              <p
                class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer capitalize"
              >
                {{ red.name }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Container>
  <div class="bg-primary-900 grid place-content-center py-6">
    <img
      src="../assets/img/logo-autocred-footer.svg"
      alt=""
      class="w-full h-8 md:h-auto"
    />
  </div>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import { links, rrss } from "../assets/helpers/constants";
import Container from "../layouts/Container.vue";
</script>

<style lang="scss" scoped></style>
