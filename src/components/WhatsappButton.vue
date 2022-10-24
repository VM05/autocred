<template>
  <div>
    <a @click.prevent="isOpen = true">
      <img src="../assets/img/ws.png" />
    </a>
  </div>

  <div id="modal_container" class="modal-container" v-if="isOpen">
    <div class="modal">
      <p class="popup_title_text">Contacto vía Whatsapp</p>
      <div class="contenedor-formulario-titulo">
        <p class="popup_title_subtitle">
          Completa con tus datos para contactar por <strong>Whatsapp</strong> a
          nuestro ejecutivo
        </p>
        <div class="flex justify-center contenedor-formulario flex-col">
        <Loading  medium v-if="isLoading"/>
        <form id="form_popup_whatsapp" @submit.prevent="enviarFormulario" v-if="!isLoading">
          <div class="md:text-sm">
            <Input
            label="Nombre"
            id="nombre"
            placeholder="Nombre"
            @textvalue="(e) => (formularioWs.nombre_completo = e)"
            class="py-1"
            />
          </div>
          <div class="md:text-sm relative">
            <Input
            label="Teléfono"
            id="Telefono"
            isPhone
            placeholder="Teléfono"
            @update:text="(e) => (formularioWs.telefono = e)"
            :value="
            formularioWs.telefono ? formularioWs.telefono : ''
            "
            @keypress="onlyNumber"
            @textvalue="(e) => checkTelefono(e)"
            class="py-1"
            />
            <Paragraph
                        class=" w-full -bottom-6 md:-bottom-6 left-1/2  text-red-700 justify-self-center grid-flow-row text-center"
                      v-if="warningPhone"
                      >
                        El teléfono debe contener al menos 9 digitos
                      </Paragraph>
          </div>

          <div class="md:text-sm relative">
            <InputEmail
            placeholder="Ingresa tu correo de contacto"
            label="Correo electrónico"
            id="email"
            @update:email="(e) => (formularioWs.email = e)"
            class="py-1"
          />
          </div>
          <div class="md:text-sm">
          <InputRut 
          label="Rut"
          id="RUT"
          placeholder="Ingresa tu rut"
          class="w-full py-1 md:text-sm"
          @update:rut="(e) => (formularioWs.dni= e)"
          @keypress="onlyRut"
          />
          </div>
         
          <div class="md:text-sm">
            <CheckServicios
            label="¿Qué servicios necesitas?"
            @update:checkServicios="(e) => handleCheck(e)"
            />
          </div>
          <div class="popup_button_container py-3">
            <Button type="submit" whatsapp  :disabled="errorForm" text="Iniciar Chat" class="rounded-3xl"/>
            <Button danger @click="isOpen = false" text="Cerrar Chat" class="rounded-3xl" />
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import Button from "../components/Button.vue"
import Input from "../components/Form/Input.vue";
import InputRut from "../components/Input-Rut.vue";
import { formEmpty, validateEmail } from "../assets/helpers/validate";
import CheckServicios from "./CheckServicios.vue";
import InputEmail from "./Input-Email.vue";
import axios from 'axios';
import Loading from "../components/Loading.vue";
import { useContactoStore } from "../stores/contacto";
import { gestion, URL_GOGEMA } from "../assets/helpers/API";
import qs from "qs";
import { validateRut, RutFormat, formatRut } from "@fdograph/rut-utilities";
import Paragraph from '../components/Paragraph.vue'

const props = defineProps({
  telefono: String,
});

const isOpen = ref(false);
const errorForm = ref(true);
const isLoading = ref(false);
const useUtms = useContactoStore();
const warningPhone = ref(false)

const formularioWs = reactive({
  nombre_completo: "",
  email: "",
  telefono: "",
  dni:"",
  mensaje: "desde whatsapp",
  procedencia_id: useUtms.utm_procedenciaId || 103,
  tipo_contacto: useUtms.utm_tipoProcedencia || "web",
  servicios: "",
  utm_source: useUtms.utm_source || "web",
  utm_medium: useUtms.utm_medium || "web",
  utm_campaign: useUtms.utm_campaign || "web",
  canal_atencion: gestion[2].name,
})

const enviarFormulario = async() => {

  isLoading.value = true;
  try {
    const resp = await axios.post(URL_GOGEMA, qs.stringify(formularioWs));
    if (await resp.data.message) {
      isLoading.value = false;
      window.open(`https://api.whatsapp.com/send?phone=${props.telefono}&text=Hola mi nombre es ${formularioWs.nombre_completo}, mi correo electrónico es ${formularioWs.email}, mi Rut es ${formatRut(formularioWs.dni, RutFormat.DOTS_DASH)}, mi número de teléfono es ${formularioWs.telefono} y me gustaría consultar por los servicios de: ${formularioWs.servicios}`, "_self")
    }
  } catch (error) {
      console.log(error)
    if (error.response.data.message) {
      isLoading.value = false;
    }
  }

};

const onlyRut = ($event) => {
  const validRut = /[^kK0-9]/g;
  if (validRut.test($event.key)) {
    $event.preventDefault();
  }
};

const handleCheck = (e) => {
  let formated = e.value.join(",");
  formularioWs.servicios = formated;
};

watch(formularioWs, ()=>{
  if(formEmpty(formularioWs) || !validateEmail(formularioWs.email) || formularioWs.telefono.length < 9 || !validateRut(formularioWs.dni)){
    errorForm.value = true;
  }else{
    errorForm.value = false;
  }
})

const onlyNumber = ($event) => {
  const validNumbers = /[0-9]+/;
  if (!validNumbers.test($event.key)) {
    $event.preventDefault();
  }
};

const checkTelefono = (e) => {
  if (e.length >= 0) {
    if (formularioWs.telefono == "" || formularioWs.telefono.length < 9) {
      warningPhone.value = true;
    } else {
      warningPhone.value = false;
    }
  }
};

</script>

<style scoped>

.contenedor-formulario{
  min-height: 400px;

}
a {
  width: 100%;
  max-width: 60px;
  position: fixed;
  right: 10px;
  bottom: 30px;
  z-index: 10;
  transition: all 0.3s ease;
}

a > img {
  transition: all 0.3s ease;
}
a:hover img {
  transform: scale(1.1);
}

form div.popup_button_container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.contenedor-formulario-titulo {
  position: relative;
}

.contenedor-formulario-titulo::after {
  content: "";
  opacity: 0.4;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  background: url("../assets/img/ws.webp");
}
form textarea {
  border: solid 1px rgba(0, 0, 0, 0.185);
  outline: 0;
}

#form_popup_whatsapp {
  padding: 10px;
}

.popup_title_text {
  background-color: #25D366;
  padding: 0px 30px;
  display: block;
}
.popup_title_text {
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  padding: 10px 0px 10px 20px;
  color: white;
  border-top-right-radius: 0px;
  border-top-left-radius: 25px;
}

.popup_title_subtitle {
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
}

.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 80px;
  right: 60px;
  z-index: 10;
  animation: appear 0.3s ease;
}

@keyframes appear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.show {
  pointer-events: auto;
  opacity: 1;
}

.modal {
  overflow: hidden;
  font-family: "Source Sans Pro", sans-serif;
  border: 1px solid #212559af;
  min-height: 200px;
  background: white;
  border-top-right-radius: 0;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  font-weight: bold;
  z-index: 10;
  max-width: 350px;
}

</style>