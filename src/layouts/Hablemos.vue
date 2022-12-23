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
        class="grid md:grid-cols-2 grid-cols-1 form-prueba"
        @submit.prevent="handleForm"
        id="form"
        v-show="!isSuccess && !isError && !isLoading"
      >
        <input
          type="hidden"
          name="user_servicios"
          :value="formContacto.servicios"
        />

        <input type="hidden" name="user_errorform" :value="errorForm" />
        <input type="hidden" name="user_browser" :value="browserName" />
        <input type="hidden" name="user_device" :value="dispositivo" />
        <input type="hidden" name="user_href" :value="direccion_sitio" />

        <div class="left p-0 md:pr-8 md:border-r border-0">
          <Input
            placeholder="Ingresa tu nombre completo"
            label="Nombre"
            id="name"
            @update:text="(e) => (formContacto.nombre_completo = e)"
            nombre="user_name"
          />
          <InputEmail
            placeholder="Ingresa tu correo de contacto"
            label="Correo electrónico"
            id="email"
            @update:email="(e) => (formContacto.email = e)"
            nombre="user_email"
          />
          <div class="relative">
            <Input
              placeholder="Ingresa tu número"
              label="Teléfono"
              id="phone"
              isPhone
              @update:text="(e) => (formContacto.telefono = '+56' + e)"
              nombre="user_phone"
            />
            <Paragraph
              class="text-red-700 justify-self-center text-center absolute -bottom-6 w-full md:-bottom-0 left-1/2 -translate-x-1/2"
              v-if="warnings.warningTelefono"
            >
              El teléfono debe contener al menos 9 digitos
            </Paragraph>
          </div>
          <div v-if="!warningFinanciamiento">
            <InputRut 
              label="RUT"
              id="RUT"
              placeholder="RUT"
              class="w-full"
              @textvalue="(e) => (formContacto.dni = e)"
              @keypress="onlyRut"
            />
          </div>
        </div>
        <div class="right md:pl-8 p-0">
          <CheckServicios
            label="¿Qué servicios necesitas?"
            class="w-full mb-4"
            @update:checkServicios="(e) => handleCheck(e)"
          />
          <SelectGestion
            label="¿Cómo quieres que gestionemos tu servicio?"
            class="w-full"
            @update:gestion="(e) => (formContacto.canal_atencion = e)"
            :key="componentKey"
          />

          <TextArea1
            label="¿Cómo te podemos ayudar?"
            id="textarea"
            @update:textArea="(e) => (formContacto.mensaje = e)"
          />
          <div class="flex justify-end">
            <ButtonVue
              text="Enviar"
              outlinePrimary
              type="submit"
              :disabled="warnings.isWarning"
            />
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
// import SelectServicios from "../components/SelectServicios.vue";
import CheckServicios from "../components/CheckServicios.vue";
import TextArea1 from "../components/TextArea.vue";
import ButtonVue from "../components/Button.vue";
import SelectGestion from "../components/SelectGestion.vue";
import { reactive, ref, watch, onMounted, getCurrentInstance } from "vue";
import { formEmpty, validateEmail } from "../assets/helpers/validate";
import { gestion, servicios, URL_GOGEMA } from "../assets/helpers/API";
import axios from "axios";
import qs from "qs";
import Loading from "../components/Loading.vue";
import Paragraph from "../components/Paragraph.vue";
import Button from "../components/Button.vue";
import { useContactoStore } from "../stores/contacto";
import { useRoute, useRouter } from "vue-router";
import emailjs from "@emailjs/browser";
import InputRut from "../components/Input-Rut.vue";
import { validateRut } from "@fdograph/rut-utilities";

const route = useRoute();
const router = useRouter();
const isLoading = ref(false);
const isSuccess = ref(false);
const isError = ref(false);
const alerts = ref(false);
const warnings = reactive({
  warningTelefono: false,
  warningServicios: true,
  isWarning: true,
});
const errorForm = ref("uno de los campos esta vacio");
const dispositivo = ref("");
const browserName = ref("");
const direccion_sitio = window.location.href;
const warningFinanciamiento = ref(true)

const encuentraDispositivo = () => {
  let userAgent = navigator.userAgent;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName.value = "Chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName.value = "Firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName.value = "Safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName.value = "Opera";
  } else if (userAgent.match(/edg/i)) {
    browserName.value = "Edge";
  } else {
    browserName.value = "Unknown";
  }

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    dispositivo.value = "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      userAgent
    )
  ) {
    dispositivo.value = "mobile";
  }
  dispositivo.value = "desktop";
};

const onlyRut = ($event) => {
  const validRut = /[^kK0-9]/g;
  if (validRut.test($event.key)) {
    $event.preventDefault();
  }
};

onMounted(() => {
  encuentraDispositivo();
});

//Use Params
const useUtms = useContactoStore();

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
  procedencia_id: useUtms.utm_procedenciaId || 103,
  tipo_contacto: useUtms.utm_tipoProcedencia || "web",
  servicios: "",
  canal_atencion: gestion[0].name,
  utm_source: useUtms.utm_source || "web",
  utm_medium: useUtms.utm_medium || "web",
  utm_campaign: useUtms.utm_campaign || "web",
  sucursal_id: 1,
  dni: "0"
});

// const modal = ref(false);
const isFormComplete = ref(formEmpty(formContacto));
const isEmailValid = ref(validateEmail(formContacto.email));

const handleForm = async (e) => {
  e.preventDefault();

  if (!formEmpty(formContacto)) {
    await sendFormGoGema();

    if (isSuccess.value == true) {
      const formulario = document.getElementById("form");
      formulario.reset();
      router.push({ path: route.path, hash: contactRouteSuccess() });

      const span = document.querySelectorAll(".mt-1 span");
      span.forEach((span) => {
        if (span.style.display === "none") {
          span.click();
        }
      });
    } else {
      enviarMail();
      router.push({ path: route.path, hash: contactRouteIncomplete() });
    }
  }
};
const contactRouteSuccess = () => {
  let res = "#confirmacion";
  res = res + "-" + route.name.replace(" ", "-");
  return res.toLowerCase();
};

const contactRouteIncomplete = () => {
  let res = "#no-informado";
  res = res + "-" + route.name.replace(" ", "-");
  return res.toLowerCase();
};

const sendFormGoGema = async () => {
  isLoading.value = true;
  try {
    const resp = await axios.post(URL_GOGEMA, qs.stringify(formContacto));
    if (await resp.data.message) {
      isLoading.value = false;
      isSuccess.value = true;
    }
  } catch (error) {
    errorForm.value = error.response.request.response;
    if (error.response.data.message) {
      isLoading.value = false;
      isError.value = true;
    }
  }
};

const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};

const btnBack = () => {
  forceRerender();
  isSuccess.value = false;
  isError.value = false;
};
const handleCheck = (e) => {
  let formated = e.value.join(",");
  formContacto.servicios = formated;
};

watch(formContacto, () => {
  
  if (formContacto.servicios.includes("Financiamientos")) {
    warningFinanciamiento.value = false;
  } else {
    warningFinanciamiento.value = true;
    formContacto.dni = "0";
  }
  
  isFormComplete.value = formEmpty(formContacto);
  isEmailValid.value = validateEmail(formContacto.email);

  // if (formContacto.mensaje.length == 0) {
  //   formContacto.mensaje =
  //     formContacto.nombre_completo +
  //     " desea evaluar servicios de " +
  //     formContacto.servicios;
  // }
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

if(!warningFinanciamiento.value){
  if (
    warnings.warningTelefono == false &&
    warnings.warningServicios == false &&
    isEmailValid.value == true &&
    isFormComplete.value == false &&
    formContacto.mensaje != "" && validateRut(formContacto.dni)
  ) {
    warnings.isWarning = false;
  } else {
    warnings.isWarning = true;
  }

}else{

  if (
    warnings.warningTelefono == false &&
    warnings.warningServicios == false &&
    isEmailValid.value == true &&
    isFormComplete.value == false &&
    formContacto.mensaje != ""
  ) {
    warnings.isWarning = false;
  } else {
    warnings.isWarning = true;
  }
}

console.log(validateRut(formContacto.dni))
  console.log(formContacto.dni)
});


watch([isLoading, isSuccess, isError], () => {
  isLoading.value == true || isSuccess.value == true || isError.value == true
    ? (alerts.value = true)
    : (alerts.value = false);
});

const enviarMail = () => {
  const formulario = document.getElementById("form");
  emailjs.sendForm(
    "service_pgv1taa",
    "template_seiqd1b",
    formulario,
    "Jm7OFS9JSVMS2XjET"
  );
};
</script>

<style scoped></style>
