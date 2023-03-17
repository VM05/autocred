<template>
  <Container>
    <div class="relative w-full h-full md:px-12">
      <div class="absolute top-1/2 -translate-y-1/2 w-1/2">
        <Heading
          content="Convenios para empresas"
          headingType="h1"
          customSizeTitle="30px"
          class="mb-3"
        />
        <Heading
          content="Dale la mejor experiencia de compra a tus
        colaboradores"
          headingType="h1"
          secondary
          class="w-4/5"
        />
        <Heading
          content="¡Financiamos la compra de autos usados entre particulares!"
          headingType="h3"
          class="mt-3"
          customSize="27px"
        />
      </div>
      <div>
        <picture clas="w-full">
          <source
            media="(min-width:769px)"
            :srcset="nuevaDataServicios[1].img"
          />
          <source
            media="(max-width:768px)"
            :srcset="nuevaDataServicios[1].imgMobile"
          />
          <img :src="linkImagen" alt="financiamiento-autocred" class="w-full" />
        </picture>
      </div>
    </div>

    <Paragraph class="text-center mt-16 font-light text-xl md:px-12">
      En Autocred queremos facilitarle la compra de vehículos usados a tus
      colaboradores y personal ofreciéndoles
      <span class="font-bold"
        >financiamiento automotriz y transferencia segura entre personas</span
      >, la gestión de todos los trámites relacionados y, por supuesto, un
      servicio personalizado y dedicado.
    </Paragraph>

    <div class="mt-10 md:px-12">
      <Heading
        content="7 beneficios de la alianza con Autocred"
        headingType="h2"
        class="text-center"
      />

      <div class="grid grid-cols-2 gap-5 grid-flow-column mt-10">
        <CardBeneficio
          v-for="(beneficio, index) in beneficios"
          :key="index"
          :data="beneficio"
          :numero="index + 1"
        />
      </div>
    </div>

    <div class="mt-20">
      <Heading
        content="Autocred te garantiza"
        headingType="h3"
        customSize="38px"
        class="text-center"
      />

      <div class="grid grid-cols-3 gap-5">
        <div class="flex flex-col gap-3 justify-center">
          <img
            src="../../public/img/icons/Iconos_Autocred_Azul_Asesoramientoi.png"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-3 justify-center">
          <img
            src="../../public/img/icons/Iconos_Autocred_Azul_Asesoramientoi.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Heading from "../components/Heading.vue";
import { nuevaDataServicios } from "../assets/helpers/constants";
import Paragraph from "../components/Paragraph.vue";
import CardBeneficio from "../components/CardBeneficio.vue";
import { beneficios } from "../assets/helpers/constants";
</script>

<style scoped></style>
