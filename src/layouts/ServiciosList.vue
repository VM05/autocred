<template>
  <div class="mb-24">
    <div
      v-if="data"
      class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 md:px-12"
    >
      <div
        v-for="(item, index) in data.data"
        class="flex flex-col items-center gap-4"
      >
        <img
          src="../assets/img/02-menu-servicios-financiamiento.png"
          alt="servicios_Financiamiento"
          v-if="item == 'Financiamiento'"
        />
        <img
          src="../assets/img/04-menu-servicios-seguro-(EN-BAJA).png"
          alt="servicios_SeguroAutomotriz"
          v-if="item == 'Seguro'"
        />
        <img
          src="../assets/img/03-menu-servicios-tag-(EN-BAJA).png"
          alt="servicios_TAG"
          v-if="item == 'Tag'"
        />
        <img
          src="../assets/img/01-menu-servicios-transferencias.png"
          alt="servicios_Transferencias"
          v-if="item == 'Transferencias'"
        />
        <Paragraph1
          class="text-xl"
          :class="{
            'font-medium': elementActive != item.toLowerCase(),
            'font-bold': elementActive == item.toLowerCase(),
          }"
        >
          {{ item }}
        </Paragraph1>
        <router-link
          :to="{
            name: 'Servicios',
            params: { active: item.toLowerCase() },
            hash: `#${item.toLowerCase()}`,
          }"
        >
          <Button1
            text="Más información"
            :outlineSecondary="elementActive != item.toLowerCase()"
            :secondary="elementActive == item.toLowerCase()"
            class="w-full"
            :id="
              index == 0
                ? 'servicio-transferencias'
                : index == 1
                ? 'servicio-financiamiento'
                : index == 2
                ? 'servicio-seguro'
                : 'servicio-tag'
            "
          />
        </router-link>
      </div>
    </div>
    <Loading v-else />

    <div v-for="element in dataServicios">
      <div v-if="element.id == elementActive" :id="element.id">
        <Heading :content="element.title" class="md:px-12" />
        <div v-if="elementActive == 'financiamiento'">
          <Simulador id="simulador" />
        </div>
        <div class="md:px-12">
          <div
            class="grid grid-cols-1 md:grid-cols-2 md:pb-40 mb-18 md:mb-36 gap-2 md:flex md:relative md:justify-end"
          >
            <div class="justify-self-end md:absolute md:w-5/12 top-0 left-0">
              <img :src="element.img" :alt="element.title" class="w-full" />
            </div>
            <div
              class="bg-white rounded-xl shadow-xl pt-16 pb-10 px-8 flex flex-col justify-between md:w-1/2"
            >
              <Paragraph1 class="text-primary-900 font-medium text-base mb-3">
                {{ element.content }}
              </Paragraph1>
              <router-link
                :to="{ hash: '#simulador' }"
                class="w-fit self-center"
                v-if="element.id == 'financiamiento'"
              >
                <Button1
                  :text="element.buttonText"
                  secondary
                  class="w-fit self-center"
                  id="quiero-financiar"
                />
              </router-link>
              <router-link
                :to="{ hash: '#contacto' }"
                class="w-fit self-center"
                v-else
                @click="useContacto.selectService = element"
                :id="
                  element.id == 'transferencias'
                    ? 'boton-transferencia'
                    : element.id == 'tag'
                    ? 'boton-tag'
                    : 'boton-seguro'
                "
              >
                <Button1
                  :text="element.buttonText"
                  secondary
                  class="w-fit self-center"
                />
              </router-link>
            </div>
          </div>
          <div class="my-10"><hr /></div>
          <div v-if="elementActive == 'transferencias'">
            <FeaturesList :data="featuresTransferencia" />
          </div>
          <div v-if="elementActive == 'financiamiento'">
            <FeaturesList :data="featuresFinanciamiento" class="mb-24" />
          </div>
          <div v-if="elementActive == 'tag'">
            <FeaturesList :data="featuresTag" class="mb-24" />
          </div>
          <div v-if="elementActive == 'seguro'">
            <FeaturesList :data="featuresSeguro" class="mb-24" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loading from "../components/Loading.vue";
import Paragraph1 from "../components/Paragraph.vue";
import Button1 from "../components/Button.vue";
import {
  dataServicios,
  featuresTransferencia,
  featuresTag,
  featuresFinanciamiento,
  featuresSeguro,
} from "../assets/helpers/constants";
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import Heading from "../components/Heading.vue";
import axios from "axios";
import FeaturesList from "../components/FeaturesList.vue";
import Simulador from "./Simulador.vue";
import { SERVICIOS_URL } from "../assets/helpers/API";
import { useContactoStore } from "../stores/contacto";

const route = useRoute();
const data = ref();
const useContacto = useContactoStore();

const elementActive = ref(route.params.active ? route.params.active : "");

//Tipo Axios Get
onMounted(async () => {
  try {
    const servicios = await axios.get(SERVICIOS_URL);
    data.value = await servicios.data;
  } catch (error) {
    console.log("error");
  }

  const urlsearch = window.location.href;

  if (urlsearch.indexOf("#tag") > 0) {
    elementActive.value = "tag";
  } else if (urlsearch.indexOf("#financiamiento") > 0) {
    elementActive.value = "financiamiento";
  } else if (urlsearch.indexOf("#seguro") > 0) {
    elementActive.value = "seguro";
  } else if (urlsearch.indexOf("#transferencias") > 0) {
    elementActive.value = "transferencias";
  } else {
    elementActive.value = "";
  }

  console.log(elementActive.value);
});

watch(route, () => {
  elementActive.value = route.params.active;
});
</script>

<style lang="scss" scoped></style>
