<template>
  <Button
    class="mb-10"
    secondary
    @click="
      isOpen = true;
      cambiarHoras();
    "
    text="Abrir Modal"
  />

  <Modal v-if="isOpen" @on:close="cerrarEvento">
    <template v-slot:header>
      <img
        src="../assets/img/logo-autocred-menu.svg"
        alt=""
        class="mx-auto w-52 py-5"
      />
    </template>
    <template v-slot:body>
      <Loading v-if="isLoading" />
      <form
        v-else-if="!isLoading && !isSuccess"
        @submit.prevent="handleAuthClick"
      >
        <div class="w-full flex flex-col relative py-4">
          <Input
            label="Nombre completo"
            id="Nombre"
            placeholder="Nombre Completo"
            :value="formAgenda.titulo_evento"
            @update:text="(e) => (formAgenda.titulo_evento = e)"
            class="py-0"
            @textvalue="(e) => checkName(e)"
          />
          <Paragraph
            class="absolute w-full -bottom-2 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
            v-if="warningName"
          >
            Debe ingresar su nombre
          </Paragraph>
        </div>
        <div class="flex flex-col md:flex-row justify-between md:gap-5">
          <div class="flex flex-col w-full py-4">
            <Input
              date
              label="Fecha de visita"
              id="fecha-nacimiento"
              placeholder="fecha"
              :value="formAgenda.start"
              @update:text="(e) => (formAgenda.start = e)"
              class="py-0"
              @change="cambiarHoras"
              :fecha="hoy"
            />
          </div>

          <div class="flex w-full py-4">
            <SelectHorario
              label="Indique el horario de visita"
              id="horario"
              :value="hora"
              @update:hora="(e) => (hora = e)"
              class="py-0"
              :valor="arregloDePrueba"
            />
          </div>
        </div>

        <div class="flex w-full py-4 relative">
          <Input
            label="Correo Electrónico"
            id="Correo-modal"
            :value="formAgenda.correo"
            @update:text="(e) => (formAgenda.correo = e)"
            class="py-0"
            @textvalue="(e) => checkEmail(e)"
          />
          <Paragraph
            class="absolute w-full -bottom-8 md:-bottom-2 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
            v-if="warningEmail"
          >
            Por favor ingresa una direccion de correo valida
          </Paragraph>
        </div>

        <div class="flex w-full py-4 relative">
          <Input
            isPhone
            label="Teléfono"
            class="py-0"
            @update:text="
              (e) => {
                formAgenda.telefonoModal = e;
              }
            "
            @keypress="onlyNumber"
            @textvalue="(e) => checkTelefono(e)"
          />
          <Paragraph
            class="absolute w-full -bottom-8 md:-bottom-2 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
            v-if="warningPhone"
          >
            El teléfono debe contener al menos 9 digitos
          </Paragraph>
        </div>

        <div class="flex flex-row justify-center gap-5 mt-10">
          <Button secondary @click="cerrarEvento" text="Cancelar" />

          <Button primary type="submit" text="Agregar" :disabled="errorForm" />
        </div>
      </form>
      <div v-if="isSuccess && !isLoading" class="text-center flex flex-col">
        <Paragraph class="font-bold">Hemos agendado tu visita</Paragraph>
        <Paragraph class="mb-8"
          >Un ejecutivo te contactara en el transcurso del dia para confirmar la
          cita
        </Paragraph>
        <div class="flex flex-row gap-2 justify-center">
          <!-- <router-link to="/registro"> -->
          <Button secondary text="Cerrar" @click="cerrarEvento" />
          <!-- </router-link> -->
        </div>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import Modal from "./ModalView.vue";
import { ref, reactive, watch, onMounted, onBeforeMount } from "vue";
import Button from "./Button.vue";
import SelectHorario from "./SelectHorario.vue";
import Input from "./Form/Input.vue";
import Loading from "./Loading.vue";
import {
  horas,
  CALENDAR_GET_URL,
  CALENDAR_INSERT_URL,
} from "../assets/helpers/API";
import { formEmpty, validateEmail } from "../assets/helpers/validate";
import axios from "axios";

onMounted(() => {
  console.log(new Date().toLocaleDateString());
  console.log(hoy);
});

const hoy = new Date().toLocaleDateString().split("-").reverse().join("-");
const horaDelDia = String(new Date().getHours());
const isOpen = ref(false);
const hora = ref();
const isLoading = ref(false);
const errorForm = ref(true);
const warningName = ref(false);
const warningEmail = ref(false);
const warningPhone = ref(false);
const isSuccess = ref(false);
let arregloDePrueba = ref([]);

const formAgenda = reactive({
  start: hoy,
  titulo_evento: "",
  correo: "",
  telefonoModal: "",
  horaInicio: "",
  horaFinal: "",
});

const cerrarEvento = () => {
  isSuccess.value = false;
  isOpen.value = false;
  formAgenda.start = hoy;
  warningName.value = false;
  warningEmail.value = false;
  warningPhone.value = false;
  cambiarHoras();
};

// let eventos = {
//   summary: "Visita Van Movil",
//   description: `+56${formAgenda.telefonoModal}`,
//   start: {
//     dateTime: `${formAgenda.start}T${formAgenda.horaInicio}`,
//     timeZone: "GMT-4",
//   },
//   end: {
//     dateTime: `${formAgenda.start}T${formAgenda.horaFinal}`,
//     timeZone: "GMT-4",
//   },
//   attendees: [
//     { email: `${formAgenda.correo}` },
//     { email: "victor.montiel@autocred.cl" },
//   ],
//   reminders: {
//     useDefault: false,
//     overrides: [
//       { method: "email", minutes: 24 * 60 },
//       { method: "popup", minutes: 0 },
//     ],
//   },
// };

const handleAuthClick = async () => {
  isLoading.value = true;

  let eventos = {
    status: "confirmed",
    summary: `${formAgenda.titulo_evento} - Visita Oficina Movil`,
    description: `+56${formAgenda.telefonoModal}`,
    creator: {
      email: "victor.montiel@autocred.cl",
      self: true,
    },
    organizer: {
      email: "victor.montiel@autocred.cl",
      self: true,
    },
    start: {
      dateTime: `${formAgenda.start}T${formAgenda.horaInicio}`,
      timeZone: "GMT-04:00",
    },
    end: {
      dateTime: `${formAgenda.start}T${formAgenda.horaFinal}`,
      timeZone: "GMT-04:00",
    },
    attendees: [
      {
        email: `${formAgenda.correo}`,
        responseStatus: "needsAction",
      },
      {
        email: "oficina.movil@autocred.cl",
        responseStatus: "needsAction",
      },
      {
        email: "victor.montiel@autocred.cl",
        organizer: true,
        self: true,
        responseStatus: "needsAction",
      },
    ],
    reminders: {
      useDefault: false,
      overrides: [
        {
          method: "email",
          minutes: 1440,
        },
        {
          method: "popup",
          minutes: 0,
        },
      ],
    },
    eventType: "default",
  };

  try {
    const respuesta = await axios.post(CALENDAR_INSERT_URL, eventos);
    if (respuesta.status == "200") {
      isLoading.value = false;
      isSuccess.value = true;
      formAgenda.titulo_evento = "";
      formAgenda.correo = "";
      formAgenda.telefonoModal = "";
      formAgenda.start = hoy;
    }
  } catch (error) {
    console.log(error);
  }
};

const cambiarHoras = async () => {
  let arregloDeApoyo = horas;
  try {
    const respuesta = await axios.post(CALENDAR_GET_URL, {
      start: formAgenda.start,
    });

    console.log(respuesta.data);

    if (respuesta.data.length <= 0) {
      if (formAgenda.start == hoy) {
        arregloDeApoyo = arregloDeApoyo.filter(
          (hora) =>
            new Date(`${hoy}T${horaDelDia}:00:00`).getTime() <
            hora.fecha.getTime()
        );
      } else {
        arregloDeApoyo = horas;
      }
    } else {
      respuesta.data.forEach((item) => {
        if (item.status == "confirmed") {
          let tiempoInicio = item.start.dateTime.substring(11, 13);
          if (formAgenda.start == hoy) {
            arregloDeApoyo = arregloDeApoyo.filter(
              (hora) =>
                hora.value != tiempoInicio &&
                new Date(`${hoy}T${horaDelDia}:00:00`).getTime() <
                  hora.fecha.getTime()
            );
          } else {
            arregloDeApoyo = arregloDeApoyo.filter(
              (hora) => hora.value != tiempoInicio
            );
          }
        }
      });
    }
    if (arregloDeApoyo.length > 0) {
      arregloDePrueba.value = arregloDeApoyo;
    } else {
      arregloDePrueba.value = [
        { id: 0, value: "0", name: "Horarios no disponibles" },
      ];
    }
  } catch (error) {
    console.log(error);
  }
};

const checkName = (e) => {
  if (e.length >= 0) {
    if (formAgenda.titulo_evento == "") {
      warningName.value = true;
    } else {
      warningName.value = false;
    }
  }
};

const checkTelefono = (e) => {
  if (e.length >= 0) {
    if (formAgenda.telefonoModal == "" || formAgenda.telefonoModal.length < 9) {
      warningPhone.value = true;
    } else {
      warningPhone.value = false;
    }
  }
};

const checkEmail = (e) => {
  if (e.length >= 0) {
    if (formAgenda.correo == "" || !validateEmail(e)) {
      warningEmail.value = true;
    } else {
      warningEmail.value = false;
    }
  }
};

const onlyNumber = ($event) => {
  let keyCode = $event.keyCode ? $event.keyCode : $event.which;
  if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
    $event.preventDefault();
  }
};

watch(formAgenda, () => {
  if (formEmpty(formAgenda)) {
    errorForm.value = true;
  } else if (
    !validateEmail(formAgenda.correo) ||
    formAgenda.telefonoModal.length < 9
  ) {
    errorForm.value = true;
  } else {
    errorForm.value = false;
  }
});

watch(arregloDePrueba, () => {
  console.log(arregloDePrueba.value);
});

watch(hora, () => {
  switch (hora.value) {
    case "09":
      formAgenda.horaInicio = "09:00:00";
      formAgenda.horaFinal = "11:00:00";
      console.log(formAgenda.horaInicio);
      break;
    case "11":
      formAgenda.horaInicio = "11:00:00";
      formAgenda.horaFinal = "13:00:00";
      console.log(formAgenda.horaInicio);
      break;
    case "15":
      formAgenda.horaInicio = "15:00:00";
      formAgenda.horaFinal = "17:00:00";
      console.log(formAgenda.horaInicio);
      break;
    case "17":
      formAgenda.horaInicio = "17:00:00";
      formAgenda.horaFinal = "19:00:00";
      console.log(formAgenda.horaInicio);
      break;
    case "0":
      formAgenda.horaInicio = "";
      formAgenda.horaFinal = "";
      break;
    default:
      formAgenda.horaInicio = "";
      formAgenda.horaFinal = "";
      console.log(formAgenda.horaInicio);
      break;
  }
  console.log(formAgenda.horaInicio, formAgenda.horaFinal);
});
</script>
