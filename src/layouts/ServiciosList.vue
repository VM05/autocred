<template>
  <div class="bg-gray-100 mb-24">
    <div v-if="data" class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
      <div v-for="item in data.data" class="flex flex-col items-center gap-4">
        <img src="https://picsum.photos/id/237/220/150" alt="" />
        <Paragraph1
          class="text-xl"
          :class="{
            'font-medium': elementActive != item.toLowerCase(),
            'font-bold': elementActive == item.toLowerCase(),
          }"
        >
          {{ item }}
        </Paragraph1>
        <Button1
          text="Mas informacion"
          :outlineSecondary="elementActive != item.toLowerCase()"
          :secondary="elementActive == item.toLowerCase()"
          class="w-full"
          @click="active(item)"
        />
      </div>
    </div>
    <Loading v-else />
    <div v-for="element in dataServicios">
      <div v-if="element.id == elementActive">
        <Heading :content="element.title" />
        <div class="p-16">
          <div class="grid grid-cols-2 pb-24 mb-20 border-b">
            <div class="py-16 -ml-6 justify-self-end">
              <img :src="element.img" :alt="element.title" class="w-full" />
            </div>
            <div
              class="bg-white rounded-xl shadow-xl pt-16 pb-10 px-8 flex flex-col justify-between"
            >
              <Paragraph class="text-primary-900 font-medium text-base">
                {{ element.content }}
              </Paragraph>
              <Button
                :text="element.buttonText"
                secondary
                class="w-fit self-center"
              />
            </div>
          </div>
          <div v-if="elementActive == 'transferencias'">
            <FeaturesList :data="featuresTransferencia" />
          </div>
          <div v-if="elementActive == 'financiamiento'">
            <FeaturesList :data="featuresFinanciamiento" class="mb-24" />
            <Simulador />
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
import { isObjEmpty } from "../assets/helpers/validate";
import {
  dataServicios,
  featuresTransferencia,
  featuresTag,
  featuresFinanciamiento,
  featuresSeguro,
} from "../assets/helpers/constants";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import Heading from "../components/Heading.vue";
import axios from "axios";
import FeaturesList from "../components/FeaturesList.vue";
import Simulador from "./Simulador.vue";
const route = useRoute();
const data = ref();

const elementActive = ref(
  isObjEmpty(route.query) ? "" : Object.keys(route.query)[0].toLowerCase()
);
const active = (element) => {
  console.log(element);
  elementActive.value = element.toLowerCase();
};

//Tipo Axios Get
onMounted(async () => {
  try {
    const servicios = await axios.get(
      "https://dev.autocred.cl/api/utilities/others/services"
    );
    data.value = await servicios.data;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
});
</script>

<style lang="scss" scoped></style>
