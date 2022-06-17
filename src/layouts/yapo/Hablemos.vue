<script setup>
import Heading from "../../components/Heading.vue";
import Input from "../../components/Form/Input.vue";
import InputEmail from "../../components/Input-Email.vue";
import ButtonVue from "../../components/Button.vue";
import { ref, reactive, watch } from "vue";
import { formEmpty } from "../../assets/helpers/validate";
import Modal from "../../components/Yapo/Modal.vue";
import CheckServicios from "../../components/CheckServicios.vue";

import { gestion, servicios, URL_GOGEMA } from "../../assets/helpers/API";
import axios from "axios";
import qs from "qs";

defineProps({
  selectService: {
    default: 0,
    type: Number,
  },
});
//Use Params
const URL = window.location.search;
const urlParams = new URLSearchParams(URL);
const utm_source = urlParams.get("utm_source");
const utm_medium = urlParams.get("utm_medium");
const utm_campaign = urlParams.get("utm_campaign");

const modal = ref(false);
const warnings = reactive({
  warningTelefono: false,
  warningServicios: false,
  isWarning: false,
});

watch(warnings, () => {
  if (warnings.warningTelefono == false && warnings.warningServicios == false) {
    warnings.isWarning = false;
  } else {
    warnings.isWarning = true;
  }
});
const form = reactive({
  nombre: "",
  email: "",
  tel: "",
  mensaje: "",
  servicio: servicios[0].name,
  canal: gestion[0].name,
});

const formContacto = reactive({
  nombre_completo: "",
  email: "",
  telefono: "",
  mensaje: "",
  procedencia_id: 61,
  tipo_contacto: "web",
  servicios: "",
  canal_atencion: "Ejecutivo Online",
  utm_source: utm_source,
  utm_medium: utm_medium,
  utm_campaign: utm_campaign,
});

const handleCheck = (e) => {
  let formated = e.value.join(",");
  formContacto.servicios = formated;
};

const isFormComplete = ref(formEmpty(formContacto));

const openModal = () => {
  modal.value = true;
};
watch(formContacto, () => {
  isFormComplete.value = formEmpty(formContacto);
  formContacto.mensaje =
    formContacto.nombre_completo +
    " desea evaluar servicios de " +
    formContacto.servicios;
  if (formContacto.telefono.length > 0 && formContacto.telefono.length < 12) {
    warnings.warningTelefono = true;
  } else {
    warnings.warningTelefono = false;
  }
  if (formContacto.servicios.length > 0) {
    warnings.warningServicios = false;
  } else {
    warnings.warningServicios = true;
  }
});

const modalWithError = ref(true);

const handleForm = (e) => {
  if (formEmpty(isFormComplete)) {
    openModal();
  } else {
    modalWithError.value = false;
    // sendEmail();
    sendFormGoGema();
  }
};

const sendFormGoGema = async () => {
  // isLoading.value = true;
  try {
    const resp = await axios.post(URL_GOGEMA, qs.stringify(formContacto));
    if (await resp.data.message) {
      openModal();
    }
  } catch (error) {
    if (error.response.data.message) {
      modalWithError.value = true;
      openModal();
    }
  }
};

const emitFromModal = (valor) => {
  modal.value = valor;
};
</script>
<template>
  <div class="bg-white rounded-xl card shadow-lg p-2 flex flex-col">
    <Heading
      content="Solicita tu servicio con nosotros"
      headingType="h3"
      class="border-b pb-4"
    />
    <form
      id="form"
      @submit.prevent="handleForm"
      class="grid grid-cols-1 xl:grid-cols-2 h-full"
      autocomplete="nope"
    >
      <div class="left pr-0 lg:pr-8 lg:border-r">
        <Input
          placeholder="Ingresa tu nombre completo"
          label="Nombre"
          id="name"
          @update:text="(e) => (formContacto.nombre_completo = e)"
        />
        <InputEmail
          placeholder="Ingresa tu correo de contacto"
          label="Correo Electronico"
          id="email"
          @update:email="(e) => (formContacto.email = e)"
        />
        <Input
          placeholder="Ingresa tu número"
          label="Teléfono"
          id="phone"
          isPhone
          @update:text="(e) => (formContacto.telefono = '+56' + e)"
        />
        <p v-if="warnings.warningTelefono" class="text-red-700">
          Teléfono debe contener al menos 9 caracteres
        </p>
      </div>
      <div class="right pl-0 lg:pl-8 flex flex-col justify-between">
        <!-- <SelectServicios
          label="¿Qué servicios necesitas?"
          class="w-full"
          @update:servicio="(e) => (formContacto.servicios = e)"
          :selectService="selectService"
        /> -->
        <CheckServicios
          label="¿Qué servicios necesitas?"
          class="w-full mb-4"
          @update:checkServicios="(e) => handleCheck(e)"
        />
        <p v-if="warnings.warningServicios" class="text-red-700 mb-4">
          Debes seleccionar al menos uno o mas servicios
        </p>
        <!-- <SelectGestion
          label="¿Cómo quieres que gestionemos tu servicio?"
          class="w-full"
          @update:gestion="(e) => (formContacto.canal_atencion = e)"
        />

        <TextArea
          label="¿Cómo te podemos ayudar?"
          id="textarea"
          @update:textArea="(e) => (formContacto.mensaje = e)"
        /> -->
        <div class="flex justify-end">
          <ButtonVue
            text="Enviar"
            outlinePrimary
            type="submit"
            :disabled="warnings.isWarning"
            class="w-full mb-4"
          />
        </div>
      </div>
    </form>
    <Modal
      :isOpen="modal"
      :modalWithError="modalWithError"
      @closeModal="emitFromModal"
    />
  </div>
</template>

<style scoped></style>
