<template>
  <Container id="Footer" class="mb-4 md:mb-20">
    <div class="bg-white flex flex-col md:grid md:grid-cols-3 px-4 md:px-0">
      <div
        class="documentos md:border-x-2 xl:px-12 md:px-5 pt-5 gap-6 flex flex-col"
      >
        <div id="documentosLegales">
          <Paragraph primary class="font-semibold mb-1">
            Documentos Legales
            </Paragraph>
          <router-link
            class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
            to="/terminos-y-condiciones"
            target="_blank"
          >
            Términos y condiciones
          </router-link>
        </div>
        <div id="somosAutocred">
          <Paragraph primary class="font-semibold mb-1">
           Somos Autocred
            </Paragraph>
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
          <Paragraph primary class="font-semibold mb-1">
            Casa Matriz
            </Paragraph>
          <a
            href="https://www.google.cl/maps/place/Spaces/@-33.4145955,-70.603794,17z/data=!3m1!4b1!4m5!3m4!1s0x9662cf4212304611:0xa573dcf4ad3a9b63!8m2!3d-33.4146!4d-70.6016"
            class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
            target="_blank"
          >
            El Bosque Norte 0211, Piso 3 (Spaces), Las Condes, RM
          </a>
        </div>
        <div id="contacto">
          <Paragraph primary class="font-semibold mb-1">
            Contacto
            </Paragraph>
          <a
            class="text-base font-medium text-gray-500 hover:text-secondary-800 hover:cursor-pointer"
            href="mailto:mail@autocred.cl"
          >
            contacto@autocred.cl
          </a>
        </div>
      </div>
      <div class="redes md:border-r-2 xl:px-12 md:px-5 pt-5">
        <Paragraph primary class="font-semibold mb-1">
            Redes Sociales
            </Paragraph>
        <div class="flex flex-col gap-2">
          <a v-for="red in rrss" :href="red.url" target="_blank">
            <div class="flex flex-row gap-2 items-center">
              <img :src="red.src" :alt="red.name" class="w-5 h-5"  :title="red.name"/>
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
      alt="autocred"
      class="w-full h-8 md:h-fit"
    />
  </div>
</template>

<script setup>
import Heading from "../components/Heading.vue";
import Paragraph from "./Paragraph.vue";
import { links, rrss } from "../assets/helpers/constants";
import Container from "../layouts/Container.vue";
</script>

<style lang="scss" scoped></style>
