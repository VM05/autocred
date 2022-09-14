<template>
  <FullCalendar :options="options" :key="componentKey" />
</template>

<script setup>
// import Modal from "./ModalView.vue";
import { ref, reactive, watch, onMounted, onBeforeMount } from "vue";
import "@fullcalendar/core/vdom";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

// import Button from "./Button.vue";
// import SelectHorario from "./SelectHorario.vue";
// import Input from "./Form/Input.vue";
// import Loading from "./Loading.vue";
// import Paragraph from "./Paragraph.vue";

// const hoy = new Date().toLocaleDateString().split("-").reverse().join("-");
// const horaDelDia = String(new Date().getHours());
// const id = ref(10);
// const isOpen = ref(false);
// const titulo_evento = ref();
// const fecha = ref(hoy);
// const hora = ref();
// const correo = ref();
// const telefonoModal = ref();
// const horaInicio = ref();
// const horaFinal = ref();
// const isLoading = ref(false);
// const errorForm = ref(true);
// const warningName = ref(false);
// const warningEmail = ref(false);
// const warningPhone = ref(false);
// const isSuccess = ref(false);
const componentKey = ref(0);

// const formAgenda = reactive({
//   fecha: hoy,
//   titulo_evento: "",
//   correo: "",
//   telefonoModal: "",
//   horaInicio: "",
//   horaFinal: "",
// });

// const closeModal = () => (isOpen.value = false);

// const valoresModal = () => {
//   const asd = argumentosOpciones.value.view.calendar;

//   asd.addEvent({
//     id: Date.now(),
//     title: titulo_evento.value,
//     start: fecha.value,
//     allDay: false,
//     editable: false,
//   });
//   isOpen.value = false;
// };

// const { getEvents, createEvent, updateEvent, deleteEvent } = useEvents();

const options = reactive({
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    googleCalendarPlugin,
    interactionPlugin,
  ],

  googleCalendarApiKey: "AIzaSyBrHAy3DbFwtkh9EgllzX7Sp14GxGPIYBQ",
  events: {
    googleCalendarId: "c_d6clpjjf02e353ehjfgqkoq1co@group.calendar.google.com",
  },

  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,dayGridWeek,list",
  },
  buttonText: {
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "día",
    list: "lista",
  },
  locale: "es",
  editable: true,
  selectable: true,
  weekends: true,

  // select: (arg) => {
  //   console.log(arg);
  //   const cal = arg.view.calendar;

  //   cal.unselect();
  //   cal.addEvent({
  //     id: `${id.value}`,
  //     title: titulo,
  //     start: arg.start,
  //     end: arg.end,
  //     allDay: false,
  //     editable: false,
  //   });
  // },

  // dateClick: (arg) => {
  //   isOpen.value = true;
  //   argumentosOpciones.value = arg;

  //   fecha.value = argumentosOpciones.value.dateStr;
  // },

  // eventClick: (arg) => {
  //   if (arg.event) {
  //     const result = window.confirm("esta seguro de eliminarlo?");
  //     if (result) {
  //       arg.event.remove();
  //     }
  //   }
  // },
  // events: [],
  // eventAdd: (arg) => {
  //   createEvent({
  //     id: arg.event.id,
  //     title: titulo_evento.value,
  //     start: arg.event.start,
  //     end: arg.event.end,
  //     allDay: false,
  //   });
  // },
  // eventChange: (arg) => {
  //   updateEvent(
  //     {
  //       id: arg.event.id,
  //       title: arg.event.title,
  //       start: arg.event.start,
  //       end: arg.event.end,
  //       allDay: false,
  //     },
  //     arg.event.id
  //   );
  // },
  // eventRemove: (arg) => {
  //   deleteEvent(arg.event.id);
  // },
});

// const argumentosOpciones = ref("");

// options.events = getEvents.value;

// watch(getEvents, () => {
//   options.events = getEvents.value;
// });

// const forceRerender = () => {
//   componentKey.value += 1;
// };
</script>
