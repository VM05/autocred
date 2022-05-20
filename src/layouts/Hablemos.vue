<template>
  <div class="bg-gray-100 py-12 px-12 mb-12">
    <Heading1 content="Hablemos" class="mb-12" />
    <div class="bg-white rounded-xl card px-6 py-7">
      <Heading1 content="Formulario" headingType="h3" class="border-b pb-4" />
      <div class="grid place-content-center my-20" v-if="alerts">
        <Loading v-if="isLoading" />
        <div v-if="isSuccess" class="text-center">
          <Paragraph class="font-bold">Gracias por contactarnos</Paragraph>
          <Paragraph class="mb-8"
            >Nos comunicaremos contigo a la brevedad
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
        class="grid grid-cols-2"
        @submit.prevent="handleForm"
        id="form"
        v-else
      >
        <div class="left pr-8 border-r">
          <Input
            placeholder="Ingresa tu nombre completo"
            label="Nombre"
            id="name"
            @update:text="(e) => (formContacto.nombres = e)"
          />
          <InputEmail
            placeholder="Ingresa tu correo de contacto"
            label="Correo Electronico"
            id="email"
            @update:email="(e) => (formContacto.email = e)"
          />
          <Input
            placeholder="Ingresa tu numero"
            label="Telefono"
            id="phone"
            isPhone
            @update:text="(e) => (formContacto.telefono = e)"
          />
        </div>
        <div class="right pl-8">
          <SelectServicios
            label="Que servicios necesitas?"
            class="w-full"
            @update:servicio="(e) => (formContacto.servicios = e)"
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
import { gestion, servicios } from "../assets/helpers/API";
import axios from "axios";
import qs from "qs";
import Loading from "../components/Loading.vue";
import Paragraph from "../components/Paragraph.vue";
import Button from "../components/Button.vue";
const isLoading = ref(false);
const isSuccess = ref(false);
const isError = ref(false);
const alerts = ref(false);

const formContacto = reactive({
  nombres: "",
  apellidos: "escobar",
  email: "",
  telefono: "",
  mensaje: "",
  procedencia_id: 100,
  tipo_contacto: "web",
  servicios: servicios[0].name,
  canal_atencion: gestion[0].name,
});
// const modal = ref(false);
const isFormComplete = ref(formEmpty(formContacto));

watch(formContacto, () => {
  isFormComplete.value = formEmpty(formContacto);
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
    const resp = await axios.post(
      "https://sandboxapiflux.go-gema.com/v1/leads?access-token=i29UiVtwsDXyPP1rb0LDP9Mku1MRZaPG",
      qs.stringify(formContacto)
    );
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
