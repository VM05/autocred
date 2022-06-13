<template>
  <div class="py-6 md:py-12 px-6 md:px-12 md:mb-12 mb-6">
    <Heading1 content="Solicita tu servicio con nosotros" class="mb-12" />
    <div
      class="bg-transparent md:bg-hablemos-100 rounded-xl card p-0 md:px-6 md:py-7 md:shadow-xl"
    >
      <Heading1
        content="Formulario Contacto"
        headingType="h3"
        class="border-b pb-4"
      />
      <div class="grid place-content-center my-20" v-if="alerts">
        <Loading v-if="isLoading" />
        <div v-if="isSuccess" class="text-center">
          <Paragraph class="font-bold">Gracias!</Paragraph>
          <Paragraph class="mb-8"
            >Estamos buscando a tu copiloto y este se comunicará contigo a la
            brevedad.
          </Paragraph>
          <Button text="Volver" outlinePrimary="" @click="btnBack" />
        </div>
        <div v-if="isError" class="text-center">
          <Paragraph class="font-bold text-secondary-900"
            >Ocurrio un problema con los datos ingresados</Paragraph
          >
          <Paragraph class="mb-8 text-secondary-900"
            >Intenta de nuevo
          </Paragraph>
          <Button text="Volver" outlineSecondary @click="btnBack" />
        </div>
      </div>
      <form
        class="grid md:grid-cols-2 grid-cols-1"
        @submit.prevent="handleForm"
        id="form"
        v-else
      >
        <div class="left p-0 md:pr-8 md:border-r border-0">
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
            placeholder="Ingresa tu numero"
            label="Teléfono"
            id="phone"
            isPhone
            @update:text="(e) => (formContacto.telefono = '+56' + e)"
          />
          <Paragraph
            class="text-red-700 justify-self-center text-center"
            v-if="warningPhone"
          >
            El teléfono debe contener al menos 9 digitos
          </Paragraph>
        </div>
        <div class="right md:pl-8 p-0">
          <SelectServicios
            label="Que servicios necesitas?"
            class="w-full"
            @update:servicio="(e) => (formContacto.servicios = e)"
            :selectService="selectService"
          />
          <SelectGestion
            label="Como quieres que gestionemos tu servicio?"
            class="w-full"
            @update:gestion="(e) => (formContacto.canal_atencion = e)"
          />

          <TextArea1
            label="Como te podemos ayudar?"
            id="textarea"
            @update:textArea="(e) => (formContacto.mensaje = e)"
          />
          <div class="flex justify-end">
            <ButtonVue text="Enviar" outlinePrimary type="submit" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import Input from "../components/Form/Input.vue";
import InputEmail from "../components/Input-Email.vue";
import SelectServicios from "../components/SelectServicios.vue";
import TextArea1 from "../components/TextArea.vue";
import ButtonVue from "../components/Button.vue";
import SelectGestion from "../components/SelectGestion.vue";
import { reactive, ref, watch } from "vue";
import { formEmpty } from "../assets/helpers/validate";
import { gestion, servicios, URL_GOGEMA } from "../assets/helpers/API";
import axios from "axios";
import qs from "qs";
import Loading from "../components/Loading.vue";
import Paragraph from "../components/Paragraph.vue";
import Button from "../components/Button.vue";
const isLoading = ref(false);
const isSuccess = ref(false);
const isError = ref(false);
const alerts = ref(false);
const warningPhone = ref(false);
const props = defineProps({
  selectService: {
    default: 0,
    type: Number,
  },
});
const formContacto = reactive({
  nombre_completo: "",
  email: "",
  telefono: "",
  mensaje: "",
  procedencia_id: 103,
  tipo_contacto: "web",
  servicios: servicios[0].name,
  canal_atencion: gestion[0].name,
});
// const modal = ref(false);
const isFormComplete = ref(formEmpty(formContacto));
watch(formContacto, () => {
  isFormComplete.value = formEmpty(formContacto);
  if (formContacto.telefono.slice(3).length != 9) {
    warningPhone.value = true;
  } else {
    warningPhone.value = false;
  }
});
watch([isLoading, isSuccess, isError], () => {
  isLoading.value == true || isSuccess.value == true || isError.value == true
    ? (alerts.value = true)
    : (alerts.value = false);
});
const handleForm = (e) => {
  e.preventDefault();
  if (formEmpty(formContacto)) {
    console.log("vacio");
  } else {
    console.log("enviando");
    sendFormGoGema();
  }
};
const sendFormGoGema = async () => {
  isLoading.value = true;
  try {
    const resp = await axios.post(URL_GOGEMA, qs.stringify(formContacto));
    if (await resp.data.message) {
      isLoading.value = false;
      isSuccess.value = true;
    }
    console.log(resp.data);
  } catch (error) {
    console.log(error);
    if (error.response.data.message) {
      isLoading.value = false;
      isError.value = true;
    }
  }
};
const btnBack = () => {
  isSuccess.value = false;
  isError.value = false;
};
</script>

<style scoped></style>
