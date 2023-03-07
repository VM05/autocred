<template>
  <!-- <div>
    <a  :href="`https://wa.me/${props.telefono}/`" target="_blank">
      <img src="../assets/img/ws.webp" alt="whatsapp autocred" title="whatsapp autocred" />
    </a>
  </div> -->
  <div>
    <span @click.prevent="isOpen = true" class="cursor-pointer">
      <img
        src="../assets/img/ws.webp"
        alt="whatsapp autocred"
        title="whatsapp autocred"
        class="botton-ws"
      />
    </span>
  </div>

  <div id="modal_container" class="modal-container" v-if="isOpen">
    <div class="modal">
      <p class="popup_title_text">Contacto vía Whatsapp</p>
      <div class="contenedor-formulario-titulo">
        <p class="popup_title_subtitle" v-if="!isLoading">
          Completa con tus datos para contactar por <strong>Whatsapp</strong> a
          nuestro ejecutivo
        </p>
        <div class="flex justify-center contenedor-formulario flex-col">
          <Loading medium v-if="isLoading" />
          <form
            id="form_popup_whatsapp"
            @submit.prevent="enviarFormulario"
            v-show="!isLoading"
          >
            <div class="text-sm">
              <Input
                label="Nombre"
                id="nombre"
                placeholder="Nombre"
                @textvalue="(e) => (formularioWs.nombre_completo = e)"
                class="py-1"
                nombre="user_name"
              />
            </div>
            <div class="text-sm relative">
              <Input
                label="Teléfono"
                id="Telefono"
                isPhone
                placeholder="Teléfono"
                @update:text="(e) => (formularioWs.telefono = e)"
                :value="formularioWs.telefono ? formularioWs.telefono : ''"
                @keypress="onlyNumber"
                @textvalue="(e) => checkTelefono(e)"
                class="py-1"
                nombre="user_phone"
              />
              <Paragraph
                class="w-full -bottom-6 md:-bottom-6 left-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                v-if="warningPhone"
              >
                El teléfono debe contener al menos 9 digitos
              </Paragraph>
            </div>

            <div class="text-sm relative">
              <InputEmail
                placeholder="Ingresa tu correo de contacto"
                label="Correo electrónico"
                id="email"
                @textvalue="(e) => (formularioWs.email = e)"
                class="py-1"
                nombre="user_email"
              />
            </div>
            <div class="text-sm" v-if="!warningFinanciamiento">
              <InputRut
                label="Rut"
                id="RUT"
                placeholder="Ingresa tu rut"
                class="w-full py-1 md:text-sm"
                @textvalue="(e) => (formularioWs.rut = e)"
                @keypress="onlyRut"
              />
            </div>

            <div class="md:text-sm">
              <CheckServicios
                class="py-1"
                label="¿Qué servicios necesitas?"
                columnas
                @update:checkServicios="(e) => handleCheck(e)"
              />
            </div>

            <input
              type="hidden"
              name="user_servicios"
              :value="formularioWs.servicios"
            />
            <input type="hidden" name="user_errorform" :value="errorMessage" />
            <input
              type="hidden"
              name="user_browser"
              :value="useUtms.browserName"
            />
            <input
              type="hidden"
              name="user_device"
              :value="useUtms.dispositivo"
            />
            <input type="hidden" name="user_href" :value="direccion_sitio" />

            <div class="popup_button_container py-2">
              <Button
                type="submit"
                whatsapp
                :disabled="errorForm"
                text="Iniciar Chat"
                class="rounded-3xl py-1"
              />
              <Button
                danger
                @click="
                  (isOpen = false),
                    (formularioWs.telefono = ''),
                    (warningPhone = false)
                "
                text="Cerrar Chat"
                class="rounded-3xl"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted, onBeforeMount } from "vue";
import Button from "../components/Button.vue";
import Input from "../components/Form/Input.vue";
import InputRut from "../components/Input-Rut.vue";
import { formEmpty, validateEmail } from "../assets/helpers/validate";
import CheckServicios from "./CheckServicios.vue";
import InputEmail from "./Input-Email.vue";
import axios from "axios";
import Loading from "../components/Loading.vue";
import { useContactoStore } from "../stores/contacto";
import { gestion, URL_GOGEMA } from "../assets/helpers/API";
import qs from "qs";
import { validateRut, RutFormat, formatRut } from "@fdograph/rut-utilities";
import Paragraph from "../components/Paragraph.vue";
import emailjs from "@emailjs/browser";

const props = defineProps({
  telefono: String,
});

const contactoStore = useContactoStore();
const isOpen = ref(false);
const errorForm = ref(true);
const isLoading = ref(false);
const useUtms = useContactoStore();
const warningPhone = ref(false);
const warningFinanciamiento = ref(true);
const errorMessage = ref("uno de los campos esta vacio");
const direccion_sitio = window.location.href;
const elegido = ref();
const telefonoElegido = ref();

const formularioWs = reactive({
  nombre_completo: "",
  email: "",
  telefono: "",
  rut: "0",
  mensaje: "desde whatsapp",
  procedencia_id: 116,
  tipo_contacto: useUtms.utm_tipoProcedencia || "Whatsapp",
  servicios: "",
  utm_source: useUtms.utm_source || "Whatsapp",
  utm_medium: useUtms.utm_medium || "web",
  utm_campaign: useUtms.utm_campaign || "web",
  canal_atencion: gestion[2].name,
  sucursal_id: 1,
  email_vendedor: "0",
});

const enviarFormulario = async () => {
  isLoading.value = true;

  try {
    const resp = await axios.post(URL_GOGEMA, qs.stringify(formularioWs));
    if (await resp.data.message) {
      isLoading.value = false;
    }
  } catch (error) {
    errorMessage.value = error.response.data.message;
    console.log(error);
    isLoading.value = false;
    setTimeout(() => {
      enviarMail();
    }, 10);
  }
  return;

  setTimeout(() => {
    if (warningFinanciamiento.value == true) {
      window.open(
        `https://api.whatsapp.com/send?phone=${telefonoElegido.value}&text=Hola mi nombre es ${formularioWs.nombre_completo}, mi correo electrónico es ${formularioWs.email}, mi número de teléfono es ${formularioWs.telefono} y me gustaría consultar por los servicios de: ${formularioWs.servicios}`,
        "_self"
      );
    } else {
      window.open(
        `https://api.whatsapp.com/send?phone=${
          props.telefono
        }&text=Hola mi nombre es ${
          formularioWs.nombre_completo
        }, mi correo electrónico es ${
          formularioWs.email
        }, mi Rut es ${formatRut(
          formularioWs.rut,
          RutFormat.DOTS_DASH
        )}, mi número de teléfono es ${
          formularioWs.telefono
        } y me gustaría consultar por los servicios de: ${
          formularioWs.servicios
        }`,
        "_self"
      );
    }
  }, 1000);
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

watch(formularioWs, () => {
  if (formularioWs.servicios.includes("Financiamientos")) {
    warningFinanciamiento.value = false;
  } else {
    warningFinanciamiento.value = true;
    formularioWs.rut = "0";
  }

  if (!warningFinanciamiento.value) {
    if (
      formEmpty(formularioWs) ||
      !validateEmail(formularioWs.email) ||
      formularioWs.telefono.length < 9 ||
      !validateRut(formularioWs.rut) ||
      formularioWs.rut == "0"
    ) {
      errorForm.value = true;
    } else {
      errorForm.value = false;
    }
  } else {
    if (
      formEmpty(formularioWs) ||
      !validateEmail(formularioWs.email) ||
      formularioWs.telefono.length < 9
    ) {
      errorForm.value = true;
    } else {
      errorForm.value = false;
    }
  }
});

watch(isOpen, () => {
  isOpen.value && window.innerWidth < 768
    ? (document.documentElement.style.overflow = "hidden")
    : (document.documentElement.style.overflow = "auto");
});

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

const enviarMail = () => {
  const formulario = document.getElementById("form_popup_whatsapp");
  emailjs.sendForm(
    "service_pgv1taa",
    "template_lfhcybm",
    formulario,
    "Jm7OFS9JSVMS2XjET"
  );
};

onBeforeMount(async () => {
  await contactoStore.getData();
  elegido.value = Math.floor(
    Math.random() * contactoStore.telefonoWhatsapp.length
  );
  formularioWs.email_vendedor =
    contactoStore.telefonoWhatsapp[elegido.value].email;
  telefonoElegido.value =
    contactoStore.telefonoWhatsapp[elegido.value].telefono;
});
</script>
<style>
.prueba {
  overflow: hidden;
}
</style>

<style scoped>
.contenedor-formulario {
  min-height: 400px;
}

span {
  width: 100%;
  max-width: 60px;
  position: fixed;
  right: 10px;
  bottom: 30px;
  z-index: 10;
  transition: all 0.3s ease;
}

.botton-ws {
  height: 60px;
  width: 60px;
}

span > img {
  transition: all 0.3s ease;
}
span:hover img {
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
  background: url("../assets/img/wsbg.webp");
}
form textarea {
  border: solid 1px rgba(0, 0, 0, 0.185);
  outline: 0;
}

#form_popup_whatsapp {
  padding: 10px;
}

.popup_title_text {
  background-color: #25d366;
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
  overflow-x: hidden;
  overflow-y: auto;
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
  width: 350px;
}

@media (max-width: 500px) {
  .modal-container {
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    right: unset;
    width: 100%;
  }
}
</style>
