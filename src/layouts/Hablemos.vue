<template>
  <div class="bg-gray-100 py-12 px-12 mb-12">
    <Heading1 content="Hablemos" class="mb-12" />
    <div class="bg-white rounded-xl card px-6 py-7">
      <Heading content="Formulario" headingType="h3" class="border-b pb-4" />
      <form class="grid grid-cols-2" @submit.prevent="handleForm" id="form">
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
            @update:text="(e) => (formContacto.telefono = '+569' + e)"
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
import { gestion, servicios, URL_GOGEMA } from "../assets/helpers/API";
import axios from "axios";

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

// const openModal = () => {
//   modal.value = true;
// };

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
  try {
    const response = await axios.post(URL_GOGEMA, formContacto, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    console.log(response);
    // if (response) {
    //   console.log("Enviado");
    //   console.log(response.data);
    // } else {
    //   console.log("error else");
    // }
  } catch (error) {
    console.log("error catch");
  }
};
</script>

<style scoped></style>
