<template>
  <div class="mb-24">
    <div v-if="data" class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
      <div v-for="item in data.data" class="flex flex-col items-center gap-4">
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
          :to="{ name: 'Servicios', params: { active: item.toLowerCase() } }"
        >
          <Button1
            text="Mas informacion"
            :outlineSecondary="elementActive != item.toLowerCase()"
            :secondary="elementActive == item.toLowerCase()"
            class="w-full"
          />
        </router-link>
      </div>
    </div>
    <Loading v-else />
    <div v-for="element in dataServicios">
      <div v-if="element.id == elementActive">
        <Heading :content="element.title" />
        <div class="p-6 md:p-16">
          <div
            class="grid grid-cols-1 md:grid-cols-2 md:pb-40 mb-20 gap-2 md:flex md:relative md:justify-end"
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
                />
              </router-link>
              <router-link
                :to="{ hash: '#contacto' }"
                class="w-fit self-center"
                v-else
              >
                <Button1
                  :text="element.buttonText"
                  secondary
                  class="w-fit self-center"
                />
              </router-link>
            </div>
          </div>
          <div v-if="elementActive == 'transferencias'">
            <FeaturesList :data="featuresTransferencia" />
          </div>
          <div v-if="elementActive == 'financiamiento'">
            <FeaturesList :data="featuresFinanciamiento" class="mb-24" />
            <Simulador id="simulador" />
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
const router = useRouter();
const route = useRoute();
const data = ref();

const elementActive = ref(route.params.active ? route.params.active : "");

//Tipo Axios Get
onMounted(async () => {
  try {
    const servicios = await axios.get(SERVICIOS_URL);
    data.value = await servicios.data;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
});

watch(route, () => {
  elementActive.value = route.params.active;
});
</script>

<style lang="scss" scoped></style>
