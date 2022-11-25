<template>
  <span v-if="!props.data.link"
    class="bg-white shadow-2xl cardService rounded-3xl py-4 px-4 cursor-pointer"
    @click.prevent="handlerCardService(props.data.id)"
  >
    <div
      class="flex flex-col gap-4 md:gap-0 md:grid place-content-center items-center"
    >
      <img
        :src="props.data.img"
        :alt="props.data.name"
        class="w-24 md:w-full"
      />
      <div class="content">
        <Heading1
          :content="props.data.name"
          headingType="h4"
          class="font-bold mb-3"
        />
        <Paragraph class="font-medium text-base" v-html="props.data.content">
        </Paragraph>
        <p class="text-secondary-900 block mt-2 text-right italic">Lo quiero</p>
      </div>
    </div>
  </span>

  <router-link :to="props.data.link" v-else
    class="bg-white shadow-2xl cardService rounded-3xl py-4 px-4 cursor-pointer"
   
  >
    <div
      class="flex flex-col gap-4 md:gap-0 md:grid place-content-center items-center"
    >
      <img
        :src="props.data.img"
        :alt="props.data.name"
        class="w-24 md:w-full"
      />
      <div class="content">
        <Heading1
          :content="props.data.name"
          headingType="h4"
          class="font-bold mb-3"
        />
        <Paragraph class="font-medium text-base" v-html="props.data.content">
        </Paragraph>
        <p class="text-secondary-900 block mt-2 text-right italic">Lo quiero</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import Paragraph from "../components/Paragraph.vue";
import { dataServicios } from "../assets/helpers/constants";
import { useContactoStore } from "../stores/contacto";
import router from "../router";
const useContacto = useContactoStore();

const props = defineProps({
  data: Object,
  servicio: String,
});

const handlerCardService = (id) => {
  const service = dataServicios.find((element) => element.id === id);
  useContacto.selectService = service;

  if (id === "financiamiento") {
    if (props.servicio == "comprador")
      router.push({
        name: "Compradores",
        hash: "#simulador",
      });
    else if (props.servicio == "vendedor") {
      router.push({
        name: "Vendedores",
        hash: "#simulador",
      });
    }
  } else if (props.data.name == "Crédito rápido") {
    router.push({ hash: "#simulador" });
  } else {
    router.push({ hash: "#contacto" });
  }
};
</script>

<style scoped>
.md\:grid {
  grid-template-columns: 100px 1fr;
  gap: 2rem;
}
</style>
