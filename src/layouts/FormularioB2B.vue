<template>
  <div class="flex justify-end formulario-b2b relative">
    <form class="p-10 shadow-2xl bg-white z-0 w-1/2 rounded-2xl">
      <Heading
        heading-type="h2"
        content="Convenio para empresas"
        class="py-3 border-b border-b-primary-600 inline-block"
      />
      <Paragraph class="font-semibold my-6">
        Accede a los beneficios de nuestro convenio para empresas ingresando tus
        datos, te contactaremos lo más pronto posible.
      </Paragraph>
      <div class="flex flex-row gap-5">
        <Input label="Nombre empresa" id="Nombre" placeholder="Nombre" />
        <InputRut
          label="Rut empresa"
          id="RUT"
          placeholder="RUT"
          class="w-full"
        />
      </div>
      <RadioSelection
        @vehiculo-comprar="(e) => handleSelectionPersonas(e)"
        :items="personasQueTrabajan"
        :titulo="'Personas que trabajan'"
      />
    </form>
  </div>
</template>

<script setup>
import Input from "../components/Form/Input.vue";
import Heading from "../components/Heading.vue";
import Paragraph from "../components/Paragraph.vue";
import InputRut from "../components/Input-Rut.vue";
import { personasQueTrabajan } from "../assets/helpers/constants";
import RadioSelection from "./RadioSelection.vue";

const handleSelectionPersonas = (e) => {
  console.log(e);
};
</script>

<style scoped>
.formulario-b2b::before {
  content: "¡Financiamos la compra de autos usados entre particulares!";
  color: white;
  position: absolute;
  top: 30px;
  left: 25%;
  transform: translate(-50%, 0);
  font-size: 30px;
  width: 30%;
}
.formulario-b2b::after {
  content: "";
  background: url("../assets/img/cotizacion.webp");
  background-size: cover;
  background-position: -30% 30%;
  background-repeat: no-repeat;
  width: 70%;
  height: 90%;
  top: 0;
  left: 0%;
  position: absolute;

  border-radius: 30px;
  z-index: -30;
}
</style>
