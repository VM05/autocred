<template>
  <div class="py-6 mb-24">
    <Heading1 content="Donde estamos" class="mb-14" />
    <div class="grid grid-cols-2 w-full justify-between">
      <div class="grid grillaInfoMapa">
        <div class="flex w-full border-r-2">
          <img
            src="../assets/img/ilustraciones-donde-estamos.svg"
            alt=""
            class="h-96 w-24"
          />
          <ul class="flex flex-col gap-2 px-6">
            <Paragraph1
              v-for="(direccion, index) in direcciones"
              :key="index"
              class="cursor-pointer text-lg"
              :class="{
                'text-secondary-900 font-bold':
                  activeDirection == direccion.name,
                'text-primary-700 font-medium':
                  activeDirection != direccion.name,
              }"
              @click="active"
            >
              {{ direccion.name }}
            </Paragraph1>
          </ul>
        </div>
        <div class="border-r-2">
          <div
            class="flex flex-col px-6 gap-2"
            v-for="(direccion, index) in direcciones"
            v-show="direccion.name == unref(activeDirection)"
            :key="index"
          >
            <div class="flex-col">
              <div class="flex gap-1 items-center">
                <CheckIcon class="text-secondary-900 w-5 h-5" />
                <Paragraph class="text-base font-bold text-secondary-900">
                  Presencial
                </Paragraph>
              </div>
              <div class="subcontent flex flex-col pl-6">
                <Paragraph class="text-base font-medium text-primary-900">
                  {{ direccion.direccion }}
                </Paragraph>
                <Paragraph class="text-base font-medium text-primary-900">
                  {{ direccion.correo }}
                </Paragraph>
                <Paragraph class="text-base font-medium text-primary-900">
                  {{ direccion.telefono }}
                </Paragraph>
              </div>
            </div>
            <div class="flex-col">
              <div class="flex gap-1 items-center">
                <CheckIcon class="text-secondary-900 w-5 h-5" />
                <Paragraph class="text-base font-bold text-secondary-900">
                  Servicio 100% online
                </Paragraph>
              </div>
            </div>
            <div class="flex-col">
              <div class="flex gap-1 items-center">
                <CheckIcon class="text-secondary-900 w-5 h-5" />
                <Paragraph class="text-base font-bold text-secondary-900">
                  Servicio Movil
                </Paragraph>
              </div>
              <div class="subcontent subcontent flex-col pl-6">
                <Paragraph class="text-base font-medium text-primary-900">
                  Vamos a domicilio
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-8">
        <!-- <Map1 /> -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.530222906549!2d-70.57997978421838!3d-33.40941830279496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf2105f438c5%3A0xe099286da96e6fbe!2sLos%20Militares%205001%2C%20of.%20404%2C%20Las%20Condes%2C%207560955%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1652114966302!5m2!1ses!2scl"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import { ref, unref } from "vue";
import { direcciones } from "../assets/helpers/API";
import Paragraph1 from "../components/Paragraph.vue";
import { CheckIcon } from "@heroicons/vue/solid";
const activeDirection = ref("R.Metropolitana");
const active = (e) => {
  activeDirection.value = e.target.innerText;
};
</script>

<style scoped>
.active {
  color: rgb(212, 15, 125);
}
.grillaInfoMapa {
  grid-template-columns: 1fr 1fr;
}
</style>
