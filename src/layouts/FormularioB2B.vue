<template>
  <div class="flex justify-end formulario-b2b relative" v-if="!isSuccess">
    <img
      src="../assets/img/cotizacion.webp"
      alt="cotizaciones"
      class="imagen z-0 top-0"
    />
    <div class="imagen imagenBG top-0 absolute"></div>
    <form
      class="p-10 mt-72 md:mt-0 shadow-2xl bg-white z-0 md:w-3/5 rounded-2xl"
      @submit.prevent="handleForm"
      id="form"
    >
      <Heading
        heading-type="h2"
        content="Convenio para empresas"
        class="py-3 border-b border-b-primary-600 inline-block"
      />
      <Paragraph class="font-semibold my-6">
        Accede a los beneficios de nuestro convenio para empresas ingresando tus
        datos, te contactaremos lo más pronto posible.
      </Paragraph>
      <div class="flex flex-col md:flex-row gap-5">
        <Input
          label="Nombre empresa"
          id="Nombre"
          placeholder="Nombre"
          @update:text="(e) => (formBusiness.nombreEmpresa = e)"
        />
        <InputRut
          label="Rut empresa"
          id="RUT"
          placeholder="RUT"
          class="w-full"
          @update:rut="(e) => (formBusiness.rut = e)"
          @keypress="onlyRut"
          @validRut="(e) => (warningRut = e)"
        />
      </div>
      <RadioSelection
        @vehiculo-comprar="(e) => (formBusiness.trabajadores = e)"
        :items="personasQueTrabajan"
        :titulo="'Personas que trabajan'"
        class="my-5"
      />

      <div class="flex md:flex-row flex-col md:gap-5">
        <Input
          label="Nombre solicitante"
          id="nombre-solicitante"
          placeholder="Nombre solicitante"
          @update:text="(e) => (formBusiness.nombreSolicitante = e)"
        />
        <Input
          label="Cargo en la empresa"
          id="cargo-empresa"
          placeholder="Cargo en la empresa"
          @update:text="(e) => (formBusiness.cargoEmpresa = e)"
        />
      </div>

      <div class="flex flex-col md:flex-row md:gap-5 mb-14">
        <div class="relative w-full md:w-1/2">
          <Input
            label="Teléfono"
            id="Telefono"
            isPhone
            placeholder="Teléfono"
            @update:text="(e) => (formBusiness.telefono = e)"
            @keypress="onlyNumber"
            class="w-full"
          />
          <Paragraph
            class="absolute w-full -bottom-6 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
            v-if="warningTelefono"
          >
            El teléfono debe contener al menos 9 digitos
          </Paragraph>
        </div>

        <InputEmail
          absoluta
          label="Email"
          class="relative w-full md:w-1/2"
          @update:email="(e) => (formBusiness.email = e)"
          placeholder="Ingrese su email"
        />
      </div>

      <div class="flex md:justify-start justify-center w-full">
        <Button
          text="Enviar"
          secondary
          class="w-1/3 mx-auto md:mx-0"
          :disabled="disabled"
          v-if="!isLoading"
        />
        <Loading v-else medium />
      </div>

      <input
        type="hidden"
        name="user_name"
        :value="formBusiness.nombreEmpresa"
      />
      <input type="hidden" name="user_phone" :value="formBusiness.telefono" />
      <input type="hidden" name="user_email" :value="formBusiness.email" />
      <input
        type="hidden"
        name="user_workers"
        :value="formBusiness.trabajadores"
      />
      <input
        type="hidden"
        name="user_applicant"
        :value="formBusiness.nombreSolicitante"
      />
      <input
        type="hidden"
        name="user_charge"
        :value="formBusiness.cargoEmpresa"
      />
      <input type="hidden" name="user_rut" :value="formBusiness.rut" />
    </form>
  </div>
  <div class="text-center flex justify-end formulario-b2b relative" v-else>
    <img
      src="../assets/img/cotizacion.webp"
      alt="cotizaciones"
      class="imagen z-0 top-0"
    />
    <div class="imagen imagenBG top-0 absolute"></div>
    <div
      class="p-10 mt-40 md:mt-0 shadow-2xl bg-white z-0 md:w-3/5 rounded-2xl h-96 flex flex-col items-center justify-center"
    >
      <Paragraph class="font-bold"
        >¡Muchas gracias por comunicarte con nosotros!</Paragraph
      >
      <Paragraph class="mb-8">
        Su registro se encuentra en proceso, pronto nos pondremos en contacto
        con usted
      </Paragraph>
      <div class="flex flex-col gap-2 justify-center">
        <router-link to="/nosotros">
          <Button primary text="Conócenos"></Button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import Input from "../components/Form/Input.vue";
import Heading from "../components/Heading.vue";
import Paragraph from "../components/Paragraph.vue";
import InputRut from "../components/Input-Rut.vue";
import { personasQueTrabajan } from "../assets/helpers/constants";
import RadioSelection from "./RadioSelection.vue";
import InputEmail from "../components/Input-Email.vue";
import { reactive, watch, ref } from "vue";
import {
  onlyRut,
  onlyNumber,
  formEmpty,
  validateEmail,
} from "../assets/helpers/validate";
import Button from "../components/Button.vue";
import emailjs from "@emailjs/browser";
import Loading from "../components/Loading.vue";

//constantes

const formBusiness = reactive({
  nombreEmpresa: "",
  rut: "",
  trabajadores: personasQueTrabajan[0],
  nombreSolicitante: "",
  cargoEmpresa: "",
  telefono: "",
  email: "",
});

const disabled = ref(true);
const warningTelefono = ref(false);
const warningRut = ref(false);
const isLoading = ref(false);
const isSuccess = ref(false);

// funciones
const enviarMail = () => {
  const formulario = document.getElementById("form");
  emailjs.sendForm(
    "service_h77elxc",
    "template_pwvmb4q",
    formulario,
    "HYC0cLjbkpNRKFnpy"
  );
};

const handleForm = () => {
  isLoading.value = true;
  setTimeout(() => {
    enviarMail();
    isLoading.value = false;
    formBusiness.nombreEmpresa = "";
    formBusiness.rut = "";
    formBusiness.trabajadores = personasQueTrabajan[0];
    formBusiness.nombreSolicitante = "";
    formBusiness.cargoEmpresa = "";
    formBusiness.telefono = "";
    formBusiness.email = "";
    isSuccess.value = true;
  }, 1500);
};

//watchers

watch(formBusiness, () => {
  if (
    formEmpty(formBusiness) ||
    !validateEmail(formBusiness.email) ||
    !warningRut.value ||
    formBusiness.telefono.length < 9 ||
    formBusiness.nombreEmpresa.length < 1 ||
    formBusiness.cargoEmpresa.length < 1 ||
    formBusiness.nombreSolicitante.length < 1
  ) {
    disabled.value = true;
  } else {
    disabled.value = false;
  }
});
</script>

<style scoped>
.formulario-b2b::before {
  content: "¡Financiamos la compra de autos usados entre particulares!";
  color: white;
  position: absolute;
  top: 30px;
  left: 20%;
  transform: translate(-50%, 0);
  font-size: 40px;
  width: 30%;
}
/* .formulario-b2b::after {
  content: "";
  background: url("../assets/img/cotizacion.webp");
  background-size: cover;
  background-position: 0% 30%;
  background-repeat: no-repeat;
  width: 70%;
  height: 90%;
  top: 0;
  left: 0%;
  position: absolute;
  filter: invert(1%) sepia(100%) saturate(6946%) hue-rotate(247deg)
    brightness(91%) contrast(146%);
  border-radius: 30px;
  z-index: -30;
}  */

.imagenBG {
  z-index: 1;
  background-color: blue;
  opacity: 0.4;
  left: 0;
  border-radius: 30px;
}

.imagen {
  width: 70%;
  height: 95%;
  object-fit: cover;
  border-radius: 30px 30px;
  object-fit: cover;
  filter: brightness(0.8);
  position: absolute;
  z-index: -1;
  left: 0;
}

@media (max-width: 768px) {
  .imagen {
    width: 100%;
    height: 30%;
  }

  .formulario-b2b::before {
    content: "¡Financiamos la compra de autos usados entre particulares!";
    color: white;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    transform: translate(-50%, 0);
    font-size: 20px;
    width: 100%;
    text-align: center;
    padding: 20px;
  }
}
</style>
