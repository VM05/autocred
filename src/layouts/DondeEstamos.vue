<template>
  <div class="py-6 mb-24 md:px-12">
    <Heading1 content="Dónde estamos" class="mb-14" />
    <div class="grid grid-cols-1 w-full justify-between grillaDondeEstamos">
      <div class="grid grillaInfoMapa">
        <div
          class="flex flex-row-reverse justify-between md:flex-row w-full border-0 md:border-r-2"
        >
          <img
            src="../assets/img/ilustraciones-donde-estamos.svg"
            alt=""
            class="h-60 md:h-96 w-24"
          />
          <ul class="flex flex-col gap-2 px-6 contenedor-regiones">
            <Paragraph1
              v-for="(direccion, index) in direcciones"
              :key="index"
              class="cursor-pointer text-lg"
              :class="{
                'text-secondary-900 font-bold cabraloca relative translate-x-2':
                  activeDirection == direccion.name,
                'text-primary-700 font-medium ':
                  activeDirection != direccion.name,
              }"
              :id="index == 0 ? 'direccion-metropolitana' : 'otras-regiones'"
              @click="active"
            >
              {{ direccion.name }}
            </Paragraph1>
          </ul>
        </div>
        <div class="border-0 md:border-r-2">
          <div
            class="flex flex-col md:px-6 gap-2"
            v-for="(direccion, index) in direcciones"
            v-show="direccion.name == unref(activeDirection)"
            :key="index"
          >
            <div class="flex-col" v-for="servicio in direccion.servicios">
              <div class="flex gap-1 items-center mb-4">
                <CheckIcon class="text-secondary-900 w-5 h-5" />
                <Paragraph class="text-base font-bold text-secondary-900">
                  {{ servicio }}
                </Paragraph>
              </div>
              <ul class="list-disc text-primary-900" v-if="index === 1">
                Realiza tus servicios de:
                <li class="ml-8">Financiamiento</li>
                <li class="ml-8">Transferencia</li>
                <li class="ml-8">Tag</li>
                <li class="ml-8">Seguro e Inspección</li>
              </ul>
              <div
                class="subcontent flex flex-col pl-6 gap-2"
                v-if="servicio == 'Presencial'"
              >
                <div v-for="(sucursal, index) in direccion.sucursales">
                  <div
                    :id="'zona-' + (index + 1)"
                    class="flex gap-2 flex-row cursor-pointer"
                    @click="changeSucursal(sucursal.name)"
                  >
                    <LocationMarkerIcon class="text-secondary-900 w-5 h-5" />
                    <Paragraph
                      class="text-base font-medium text-primary-900"
                      :class="{
                        'text-secondary-900': activeSucursal == sucursal.name,
                      }"
                      v-html="sucursal.content"
                    />
                  </div>
                  <a
                    class="flex gap-2 items-center mb-4"
                    :href="
                      'https://api.whatsapp.com/send?phone=' + sucursal.tel
                    "
                    target="_blank"
                  >
                    <ChatIcon class="text-secondary-900 w-5 h-5" />
                    <Paragraph
                      class="text-primary-900"
                      :class="{
                        'text-secondary-900': activeSucursal == sucursal.name,
                      }"
                    >
                      Teléfono: +{{ sucursal.tel }}
                    </Paragraph>
                  </a>
                </div>
              </div>
              <div
                v-if="servicio == 'Servicio Van / Oficina Móvil'"
                class="ml-6"
              >
                <a
                  class="flex gap-2 items-center mb-4"
                  :href="'https://api.whatsapp.com/send?phone=56946456800'"
                  target="_blank"
                >
                  <ChatIcon class="text-secondary-900 w-5 h-5" />
                  <Paragraph class="text-primary-900">
                    Teléfono: +56946456800
                  </Paragraph>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 md:mt-0 md:px-8 h-60 md:h-full">
        <!-- <Map1 /> -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0766350265585!2d-70.5811848102573!3d-33.48858591616819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d02e01547ba5%3A0x88c6cd5f007ed436!2sMall%20Paseo%20Quil%C3%ADn!5e0!3m2!1ses!2scl!4v1653345345974!5m2!1ses!2scl"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          v-if="activeSucursal == 'Sur'"
          class="rounded-xl"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.414112900417!2d-70.71273566849709!3d-33.490601445418534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4aef958984d%3A0x9e2a2c3a8e90ba9!2sLas%20Am%C3%A9ricas%20375%2C%20Los%20Cerrillos%2C%20Cerrillos%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1653345499515!5m2!1ses!2scl"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          v-if="activeSucursal == 'Poniente'"
          class="rounded-xl"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.1883355798504!2d-70.6804971842194!3d-33.36614880057788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c7c1ba017f13%3A0xeb5ac418f75ed2d6!2sMallplaza%20Norte!5e0!3m2!1ses!2scl!4v1653345545191!5m2!1ses!2scl"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          v-if="activeSucursal == 'Norte'"
          class="rounded-xl"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.505215685737!2d-70.56979638421825!3d-33.410070502828226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cedde4485d87%3A0x7ce640d67d70fa10!2sApumanque!5e0!3m2!1ses!2scl!4v1653345593924!5m2!1ses!2scl"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          v-if="activeSucursal == 'Oriente'"
          class="rounded-xl"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import Paragraph1 from "../components/Paragraph.vue";
import { ref, unref } from "vue";
import { direcciones } from "../assets/helpers/API";
import Paragraph from "../components/Paragraph.vue";
import { CheckIcon, LocationMarkerIcon, ChatIcon } from "@heroicons/vue/solid";
import { useHead } from "@vueuse/head";
const activeSucursal = ref(direcciones[0].sucursales[0].name);
const activeDirection = ref("R.Metropolitana");
const active = (e) => {
  activeDirection.value = e.target.innerText;
};
const changeSucursal = (sucursal) => {
  activeSucursal.value = sucursal;
};
</script>

<style scoped>
.active {
  color: rgb(212, 15, 125);
}

.cabraloca::before {
  content: "";
  width: 14px;
  height: 12px;
  background: rgb(212, 15, 125);
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%) skew(-30deg);
  border-radius: 3px;
}

.contenedor-regiones {
  min-width: 200px;
}
.grillaInfoMapa {
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .grillaInfoMapa {
    grid-template-columns: 0.7fr 1fr;
  }
  .grillaDondeEstamos {
    grid-template-columns: 1fr 0.7fr;
  }
}
</style>
