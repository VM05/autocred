<template>
  <div class="relative w-full h-full mt-24 max-w-[1280px] mx-auto md:px-12">
    <div
      class="absolute top-24 md:top-1/2 -translate-y-1/2 text-center md:text-left md:w-1/2 px-3"
    >
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
        class="md:w-5/6"
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
          srcset="../assets/img/landing-b2b-desktop.webp"
        />
        <source
          media="(max-width:768px)"
          srcset="../assets/img/landing-b2b-mobile.webp"
        />
        <img
          :src="linkImagen"
          alt="financiamiento-autocred"
          class="w-full object-cover h-full"
        />
      </picture>
    </div>
  </div>
  <Container>
    <Paragraph
      class="text-center font-light md:text-xl md:px-12 relative -top-10"
    >
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

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 grid-flow-column mt-10">
        <CardBeneficio
          v-for="(beneficio, index) in beneficios"
          :key="index"
          :data="beneficio"
          :numero="index + 1"
        />
      </div>
    </div>

    <div class="my-20">
      <Heading
        content="Autocred te garantiza"
        headingType="h3"
        customSize="38px"
        class="text-center mb-10"
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          class="flex flex-col gap-3 items-center shadow-2xl rounded-3xl p-14"
          v-for="item in autocredGarantiza"
          :key="item"
        >
          <img :src="item.img" :alt="item.name" class="h-auto w-44 my-5" />
          <Paragraph primary class="font-bold text-xl text-center">{{
            item.texto
          }}</Paragraph>
        </div>
      </div>
    </div>

    <div class="my-10">
      <Heading
        content="3 tipos de crédito Autocred"
        primary
        headingType="h2"
        class="text-center my-10"
      />
      <div class="grid grid-cols-1 gap-10">
        <AcordionTiposCredito
          v-for="item in infoTiposCreditos"
          :key="item"
          :item="item"
        />
      </div>
    </div>

    <FormularioB2B class="my-20" />

    <div>
      <CanalesAtencion class="mt-10" />
    </div>
  </Container>
</template>

<script setup>
import Container from "../layouts/Container.vue";
import Heading from "../components/Heading.vue";
import Paragraph from "../components/Paragraph.vue";
import CardBeneficio from "../components/CardBeneficio.vue";
import {
  autocredGarantiza,
  beneficios,
  infoTiposCreditos,
} from "../assets/helpers/constants";
import AcordionTiposCredito from "../components/AcordionTiposCredito.vue";
import FormularioB2B from "../layouts/FormularioB2B.vue";
import CanalesAtencion from "../layouts/CanalesAtencion.vue";
</script>

<style scoped></style>
