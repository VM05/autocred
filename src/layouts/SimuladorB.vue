<template>
  <div>
    <Modal v-if="isOpen" @on:close="cerrarModal">
      <template v-slot:header>
        <div class="relative">
          <a
            class="absolute -right-10 text-gray-400 px-3 py-1 -top-10 bg-slate-100 hover:bg-slate-200 font-semibold rounded-full cursor-pointer transition"
            href=""
            @click.prevent="cerrarModal"
            >X</a
          >
        </div>
        <img
          src="../assets/img/logo-autocred-menu.svg"
          alt=""
          class="mx-auto w-52 pb-5"
        />
        <div class="flex flex-row text-center relative px-5 mb-5">
          <Heading1
            primary
            content="Crédito Convencional Express"
            class="w-full md:px-0"
            headingType="h3"
          />
          <img
            src="../assets/img/rayo512.webp"
            alt="rayo"
            class="absolute md:w-10 w-8 -right-2 md:right-5"
          />
        </div>
      </template>

      <template v-slot:body>
        <div class="mx-auto">
          <Paragraph primary class="text-center text-base mb-3"
            >Obtén tu financiamiento sólo con tu cédula de identidad !! <br />
            Requisitos:
          </Paragraph>

          <ul
            class="list-none md:list-disc text-center md:text-left text-primary-900"
          >
            <li>Antigüedad Vehículo: entre 2016 a 2022</li>
            <li>Pie mínimo: 40%</li>
            <li>Monto mínimo a financiar: $5.000.000</li>
          </ul>
        </div>
      </template>
    </Modal>

    <div class="md:px-12" id="simulador">
      <div class="relative grid">
        <div class="relative z-0">
          <img
            src="../assets/img/cotizacion.webp"
            alt="cotizaciones"
            class="imagen z-0 top-0"
          />
          <div class="imagen imagenBG top-0 absolute"></div>
        </div>
        <div class="z-10 absolute top-12 md:top-6 left-4 md:left-16">
          <Heading1 content="Evalúa tu crédito" white />
          <Heading1 content="En solo 7 minutos " white />
        </div>

        <div class="card shadow-2xl px-6 py-8">
          <div class="title border-b pb-4 border-primary-900">
            <Heading1
              content="Etapa 1: Consulta plazo y valor cuota"
              headingType="h3"
            />
          </div>
          <div>
            <ProgressBar v-if="activo < steps" :activo="activo" />
          </div>
          <Transition name="slide-fade">
            <form @submit.prevent="handleForm" v-show="formActive">
              <div class="content py-3 md:py-6 gap-4 md:gap-6 md:border-b px-5">
                <!-- comienzo primer paso-->
                <Transition name="slide-fade">
                  <div
                    v-show="activo == 0"
                    class="step grid grid-cols-1 md:grid-cols-3 md:gap-4"
                  >
                    <div class="col-span-1">
                      <!-- <SelectTypeCredito1
                      label="Tipo Crédito"
                      id="Tipo Crédito"
                      @update:type="(e) => (formSimulador.type = e.value)"
                      @valores="(e) => registrarValor(e)"
                    /> -->
                      <InputRut1
                        label="RUT"
                        id="RUT"
                        placeholder="RUT"
                        class="w-full"
                        @update:rut="(e) => (formSimulador.dni = e)"
                        @keypress="onlyRut"
                        @focusout="validarCliente"
                      />

                      <div class="flex flex-col relative">
                        <Input
                          label="Nombre"
                          id="Nombre"
                          placeholder="Nombre"
                          :value="formSimulador2.name"
                          @update:text="(e) => (formSimulador2.name = e)"
                          @textvalue="(e) => checkInput(e)"
                        />
                        <Paragraph
                          class="absolute w-full bottom-0 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                          v-if="warningName"
                        >
                          Debe ingresar su nombre
                        </Paragraph>
                      </div>

                      <div class="md:flex gap-2">
                        <div class="relative">
                          <Input
                            label="Apellido Paterno"
                            id="Apellido Paterno"
                            placeholder="Apellido Paterno"
                            :value="formSimulador2.first_surname"
                            @update:text="
                              (e) => (formSimulador2.first_surname = e)
                            "
                            @textvalue="(e) => checkSurname(e)"
                          />
                          <Paragraph
                            class="absolute w-full bottom-0 md:-bottom-6 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                            v-if="warningSurname"
                          >
                            Debe ingresar su apellido paterno
                          </Paragraph>
                        </div>

                        <div class="relative">
                          <Input
                            label="Apellido Materno"
                            id="Apellido Materno"
                            placeholder="Apellido Materno"
                            :value="formSimulador2.second_surname"
                            @update:text="
                              (e) => (formSimulador2.second_surname = e)
                            "
                            @textvalue="(e) => checkSecondSurname(e)"
                          />

                          <Paragraph
                            class="absolute w-full bottom-0 md:-bottom-6 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                            v-if="warningSecondSurname"
                          >
                            Debe ingresar su apellido materno
                          </Paragraph>
                        </div>
                      </div>
                    </div>

                    <div class="col-span-1 md:border-x md:px-2">
                      <div class="relative">
                        <InputEmail
                          absoluta
                          label="Email"
                          id="Email"
                          placeholder="Email"
                          @update:email="(e) => (formSimulador2.email = e)"
                          :value="
                            formSimulador2.email ? formSimulador2.email : ''
                          "
                          @textvalue="(e) => checkEmail(e)"
                          :key="componentKey"
                        />

                        <!-- <Paragraph
                        class="absolute w-full -bottom-6 md:-bottom-6 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                        v-if="warningEmail"
                      >
                        Por favor ingresa una direccion de correo valida
                      </Paragraph> -->
                      </div>

                      <div class="relative">
                        <Input
                          label="Teléfono"
                          id="Telefono"
                          isPhone
                          placeholder="Teléfono"
                          @update:text="(e) => (formSimulador2.phone = e)"
                          :value="
                            formSimulador2.phone ? formSimulador2.phone : ''
                          "
                          @keypress="onlyNumber"
                          @textvalue="(e) => checkTelefono(e)"
                        />
                        <Paragraph
                          class="absolute w-full -bottom-6 md:-bottom-6 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                          v-if="warningPhone"
                        >
                          El teléfono debe contener al menos 9 digitos
                        </Paragraph>
                      </div>

                      <div class="relative w-full">
                        <Input
                          label="Fecha Nacimiento"
                          id="Fecha Nacimiento"
                          date
                          @update:text="(e) => (formSimulador2.birth_date = e)"
                          @textvalue="checkFecha(e)"
                          :key="componentKey"
                        />

                        <Paragraph
                          class="absolute w-full -bottom-0 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                          v-if="warningFecha"
                        >
                          {{ mensajeFecha }}
                        </Paragraph>
                      </div>
                    </div>

                    <div class="col-span-1">
                      <CheckServicios
                        label="¿Como prefieres que te contactemos?"
                        class="w-full mb-4"
                        :items="formaDeContacto"
                        @update:checkServicios="(e) => handleCheck(e)"
                      />
                    </div>
                  </div>
                </Transition>
                <!-- fin primer paso -->

                <!-- comienzo segundo paso -->
                <Transition name="slide-fade">
                  <div class="md:px-5 mb-8 md:mb-0 step" v-show="activo == 1">
                    <div
                      class="grid grid-cols-1"
                      v-if="useUtms.mobile && activo == 1"
                    >
                      <Carousel
                        :items-to-show="1"
                        :itemsToScroll="1"
                        :wrap-around="true"
                      >
                        <slide v-for="item in tiposDeCredito" :key="item.valor">
                          <CardTipoCredito
                            :item="item"
                            :tipoCredito="formSimulador.type"
                            @credito="
                              (valor) => (
                                activo++, (formSimulador.type = valor)
                              )
                            "
                          />
                        </slide>

                        <template #addons>
                          <Pagination />
                        </template>
                      </Carousel>
                    </div>
                    <div class="grid grid-cols-3 gap-6" v-else>
                      <CardTipoCredito
                        v-for="item in tiposDeCredito"
                        :key="item.valor"
                        :item="item"
                        :tipoCredito="formSimulador.type"
                        @credito="
                          (valor) => (activo++, (formSimulador.type = valor))
                        "
                      />
                    </div>
                  </div>
                </Transition>
                <!--fin segundo paso-->

                <!--comienzo tercer paso-->
                <Transition name="slide-fade">
                  <div
                    v-show="activo == 2"
                    class="step transition md:px-5 md:mb-0"
                  >
                    <div class="grid md:grid-cols-3 md:gap-6">
                      <div class="col-span-1">
                        <RadioSelection @vehiculo-comprar="(e) => hands(e)" />
                        <div class="flex flex-col md:flex-row gap-3">
                          <SelectMarcas1
                            label="Marca"
                            id="Marca"
                            @update:marca="
                              (e) => {
                                formSimulador.vehicle_brand = e.name;
                                disabledModel = false;
                                useSimulador.resetModelo();
                              }
                            "
                          />
                          <SelectModelo1
                            label="Modelo"
                            id="Modelo"
                            @update:modelo="
                              (e) =>
                                e.name != 'Modelo'
                                  ? (formSimulador.vehicle_model = e.name)
                                  : (formSimulador.vehicle_model = '')
                            "
                            :disabled="disabledModel"
                          />
                        </div>
                        <div class="flex flex-col md:flex-row gap-3">
                          <Input
                            label="Version"
                            id="Version"
                            placeholder="Version"
                            @update:text="
                              (e) => (formSimulador.vehicle_version = e)
                            "
                          />

                          <SelectAnios1
                            label="Año"
                            id="Año"
                            @update:anio="
                              (e) => (formSimulador.vehicle_year = e)
                            "
                            :tipoCredito="express"
                          />
                        </div>
                      </div>
                      <div
                        class="col-span-1 md:border-x md:px-3 md:gap-6 flex flex-col"
                      >
                        <div class="price">
                          <SliderRange1
                            @update:slider="
                              (e) => (formSimulador.vehicle_price = e)
                            "
                            valorTotal
                            @keypress="onlyNumber"
                            label="Valor del vehículo"
                          />
                        </div>
                        <div class="pie">
                          <SliderRange1
                            @update:slider="
                              (e) => (formSimulador.down_payment = e)
                            "
                            @keypress="onlyNumber"
                            :valorAutomatico="formSimulador.down_payment"
                            label="Valor del pie"
                          />
                          <Paragraph
                            class="text-red-700 justify-self-center text-center grid-flow-row col-end-3 mt-2"
                            v-if="warningDownPayment"
                          >
                            {{ mensajeValor }}
                          </Paragraph>
                        </div>

                        <Input
                          label="Monto a financiar"
                          id="financiar"
                          placeholder="Monto a financiar"
                          money
                          :valor="valorFinanciar"
                          disabled
                          informativo
                        />
                      </div>
                      <div class="col-span-1 flex flex-col">
                        <div class="" v-if="!loading && !complete">
                          <img
                            src="../assets/img/simulador.svg"
                            alt="simulador"
                            class="w-full"
                          />
                        </div>
                        <div class="flex justify-center h-full" v-if="loading">
                          <Loading />
                        </div>
                        <div
                          v-else-if="complete"
                          class="col-span-1 flex flex-col justify-between"
                        >
                          <Acordion1
                            :cuotasSimulacion="dataCuotas"
                            :typeCredit="formSimulador.type"
                            @select:term="(cuota) => handleTransition(cuota)"
                            @sumar="activo++"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
                <!--fin tercer paso-->
              </div>
              <div
                class="footer md:justify-items-center md:align-middle flex flex-row justify-center gap-3 py-4"
              >
                <Button1
                  v-if="activo > 0"
                  text="volver"
                  outlinePrimary
                  id="boton-continuar"
                  @click.prevent="activo--"
                />

                <Button1
                  text="Continuar"
                  secondary
                  id="boton-volver"
                  @click.prevent="validarPaso"
                  v-if="activo < 2 && activo != 1"
                />
                <Button1
                  text="Consulta tu cuota"
                  secondary
                  :disabled="errorForm"
                  id="boton-consultar-cuota"
                  style="max-width: 170px"
                  v-if="activo == 2"
                />
              </div>
            </form>
          </Transition>
          <Transition name="slide-fade">
            <div v-show="formActive2">
              <div class="grid place-content-center my-20" v-if="alerts">
                <div v-if="loading" class="grid place-content-center">
                  <Paragraph class="text-center mb-8">
                    Estamos evaluando su crédito, espere un momento
                  </Paragraph>
                  <Loading />
                </div>
                <div v-if="isSuccess && !newUser" class="text-center">
                  <Paragraph class="font-bold"
                    >Estamos evaluando tu solicitud
                  </Paragraph>
                  <Paragraph class="mb-8"
                    >{{ formSimulador2.name }}, te invitamos a iniciar sesión o
                    recuperar tu contraseña para conocer tu resultado y
                    continuar con el proceso
                  </Paragraph>
                  <div class="flex flex-col gap-2 justify-center">
                    <router-link to="/login">
                      <Button
                        primary
                        text="Iniciar sesión"
                        @click="loginHandle"
                      ></Button>
                    </router-link>
                    <!-- <router-link to="/registro"> -->
                    <a
                      :href="PASSWORD_RESET"
                      class="text-primary-900 underline font-semibold text-base mt-5"
                    >
                      Recuperar mi contraseña
                    </a>
                    <!-- </router-link> -->
                  </div>
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
              <form @submit.prevent="handleForm2" v-else>
                <div
                  class="content py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 border-b step"
                >
                  <div class="col-span-1">
                    <div class="flex flex-col relative">
                      <div class="flex flex-col relative">
                        <Input
                          money
                          label="Renta Líquida"
                          id="Renta Líquida"
                          placeholder="Renta Líquida"
                          @update:text="(e) => (formSimulador2.salary = e)"
                          :valor="formSimulador2.salary"
                          @keypress="onlyNumber"
                          @textvalue="(e) => checkRenta(e)"
                          :key="componentKey"
                        />
                        <Paragraph
                          class="absolute w-full -bottom-6 md:-bottom-0 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                          v-if="warningSalary"
                        >
                          {{ mensajeSalario }}
                        </Paragraph>
                      </div>

                      <div class="md:flex">
                        <div class="w-full">
                          <SelectNacionalidad
                            label="Nacionalidad"
                            id="Nacionalidad"
                            @update:nacionalidad="
                              (e) => (formSimulador2.nationality = e)
                            "
                            :valor="formSimulador2.nationality"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1 md:px-5 md:border-x">
                    <div>
                      <SelectEmpleo
                        label="Tipo Ingreso"
                        id="Tipo Ingreso"
                        @update:empleo="(e) => (formSimulador2.income_type = e)"
                        :valor="formSimulador2.income_type"
                      />
                      <SelectAntiguedad
                        label="Antiguedad Laboral"
                        id="antiguedad"
                        @update:antiguedad="
                          (e) => (formSimulador2.work_continuity = e)
                        "
                        :valor="
                          formSimulador2.work_continuity
                            ? formSimulador2.work_continuity
                            : 0
                        "
                      />
                    </div>
                  </div>
                </div>
                <div class="footer flex gap-x-10 justify-center py-4">
                  <Button1
                    text="Volver"
                    outlinePrimary
                    @click.prevent="volverAnterior"
                    id="volver-anterior"
                  />
                  <Button1
                    text="Ver Resultados"
                    secondary
                    :disabled="errorForm2"
                    id="boton-ver-resultados"
                  />
                </div>
              </form>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { tiposDeCredito } from "../assets/helpers/API";
import Heading1 from "../components/Heading.vue";
import InputRut1 from "../components/Input-Rut.vue";
import SelectMarcas1 from "../components/SelectMarcas.vue";
import Input from "../components/Form/Input.vue";
import Button1 from "../components/Button.vue";
import SliderRange1 from "../components/Slider-Range.vue";
import Acordion1 from "../components/Acordion.vue";
import SelectAnios1 from "../components/SelectAnios.vue";
import SelectModelo1 from "../components/SelectModelo.vue";
import { reactive, ref, watch, onMounted, onUpdated, computed } from "vue";
import { typeCredit } from "../assets/helpers/API";
import axios from "axios";
import RadioSelection from "../layouts/RadioSelection.vue";
import {
  EVALUACION_URL_1,
  EVALUACION_URL_2,
  CARGA_DATA,
  REGISTER_URL_TWO,
  LOGIN_URL_TOKEN,
  PASSWORD_RESET,
} from "../assets/helpers/API";
import Loading from "../components/Loading.vue";
import Paragraph from "../components/Paragraph.vue";
import InputEmail from "../components/Input-Email.vue";
import SelectNacionalidad from "../components/SelectNacionalidad.vue";
import SelectEmpleo from "../components/SelectEmpleo.vue";
import SelectAntiguedad from "../components/SelectAntiguedad.vue";
import Button from "../components/Button.vue";
import { useRouter } from "vue-router";
import { formEmpty, validateEmail } from "../assets/helpers/validate";
import { useSimuladorStore } from "../stores/simulador";
import { useContactoStore } from "../stores/contacto";
import Modal from "../components/ModalView.vue";
import ProgressBar from "../components/ProgressBar.vue";
import CheckServicios from "../components/CheckServicios.vue";
import { formaDeContacto } from "../assets/helpers/API";
import CardTipoCredito from "../components/CardtTipoCredito.vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const steps = ref("");
const windowSize = ref(window.innerWidth);

const servicios = ref([]);
const activo = ref(0);
const validarMonto = ref(false);
const useSimulador = useSimuladorStore();
const useUtms = useContactoStore();
const router = useRouter();
const errorForm = ref(true);
const errorForm2 = ref(true);
const fecha_hoy = new Date();
const mensajeFecha = ref("");
const mensajeValor = ref("");
const disabledModel = ref(true);
const formSimulador = reactive({
  dni: "",
  vehicle_price: 0,
  down_payment: 0,
  requested_amount: 0,
  vehicle_brand: "",
  vehicle_model: "",
  vehicle_version: "",
  vehicle_year: "2022",
  type: typeCredit[0].value,
  source: useUtms.utm_source || "Autocred",
  medium: useUtms.utm_medium || "Autocred",
  campaign: useUtms.utm_campaign || "Autocred",
});

const formSimulador2 = reactive({
  dni: "",
  vehicle_year: "",
  vehicle_price: "",
  down_payment: "",
  requested_amount: "",
  salary: "", //Number
  term: 0, // Number
  work_continuity: "",
  birth_date: "",
  vehicle_brand: "",
  vehicle_model: "",
  vehicle_version: "",
  type: "",
  name: "",
  first_surname: "",
  second_surname: "",
  email: "",
  phone: "",
  nationality: "",
  income_type: "",
  simulation_id: "",
  source: useUtms.utm_source || "Autocred",
  medium: useUtms.utm_medium || "Autocred",
  campaign: useUtms.utm_campaign || "Autocred",
});

// const handleCredito = (valor) => {
//   formSimulador.typeCredit = valor;
// };

const registerForm = reactive({
  dni: "",
  name: "",
  surnames: "",
  email: "",
  phone_1: "",
  source: useUtms.utm_source || "Autocred",
  medium: useUtms.utm_medium || "Autocred",
  campaign: useUtms.utm_campaign || "Autocred",
});

const mensajeSalario = ref("");
const pagoMes = ref("");
const dataCuotas = ref([]);
const loading = ref(false);
const alerts = ref(false);
const isSuccess = ref(false);
const isError = ref(false);
const warningPhone = ref(false);
const warningSalary = ref(false);
const warningName = ref(false);
const warningSurname = ref(false);
const warningSecondSurname = ref(false);
const warningFecha = ref(false);
const warningMail = ref(false);
const warningEmail = ref(false);
const complete = ref(false);
const formActive = ref(true);
const formActive2 = ref(false);
const warningDownPayment = ref(false);
const newUser = ref(false);
const express = ref(false);
const claseCredito = ref(false);
const valorFinanciar = ref("");
const isOpen = ref(false);

const componentKey = ref(0);

const handleCheck = (e) => {
  let formated = e.value.join(",");
  servicios.value = formated;
};
//PASO 1
const handleForm = async () => {
  validarMonto.value = false;
  loading.value = true;
  express.value ? (formSimulador.type = "conventional") : formSimulador.type;
  formSimulador.vehicle_price = Number(formSimulador.vehicle_price);
  try {
    const res = await axios.post(EVALUACION_URL_1, formSimulador);
    dataCuotas.value = await res.data.data;

    loading.value = false;
    complete.value = true;
  } catch (error) {
    console.log("error");
  }
};

onMounted(() => {
  steps.value = document.querySelectorAll(".step").length;
});

const forceRerender = () => {
  componentKey.value += 1;
};

const validarCliente = async () => {
  try {
    if (formSimulador.dni.length > 1) {
      const res = await axios.get(CARGA_DATA + formSimulador.dni);
      if (res.data.success == true) {
        (await res.data.name) != undefined
          ? (formSimulador2.name = await res.data.name)
          : (formSimulador2.name = "");
        (await res.data.first_surname) != undefined
          ? (formSimulador2.first_surname = await res.data.first_surname)
          : (formSimulador2.first_surname = "");
        (await res.data.second_surname) != undefined
          ? (formSimulador2.second_surname = await res.data.second_surname)
          : (formSimulador2.second_surname = "");
        (await res.data.email) != undefined
          ? (formSimulador2.email = await res.data.email)
          : (formSimulador2.email = "");
        (await res.data.phone) != undefined
          ? (formSimulador2.phone = await res.data.phone.slice(3))
          : (formSimulador2.phone = "");
        (await res.data.birth_date) != undefined
          ? (formSimulador2.birth_date = document.querySelector(
              'input[type="date"]'
            ).value =
              await res.data.birth_date.split("/").reverse().join("-"))
          : "";
      } else {
        formSimulador2.name = "";
        formSimulador2.first_surname = "";
        formSimulador2.second_surname = "";
        formSimulador2.email = "";
        formSimulador2.phone = "";
        forceRerender();
      }
    }
  } catch (error) {
    console.log(error.response);
  }
};

//PASO INTERMEDIO
const handleTransition = async (cuota) => {
  try {
    const res = await axios.get(CARGA_DATA + formSimulador.dni);

    if (res.data.success == true) {
      (await res.data.name) != undefined
        ? (formSimulador2.name = await res.data.name)
        : (formSimulador2.name = "");
      (await res.data.first_surname) != undefined
        ? (formSimulador2.first_surname = await res.data.first_surname)
        : (formSimulador2.first_surname = "");
      (await res.data.second_surname) != undefined
        ? (formSimulador2.second_surname = await res.data.second_surname)
        : (formSimulador2.second_surname = "");
      (await res.data.email) != undefined
        ? (formSimulador2.email = await res.data.email)
        : (formSimulador2.email = "");
      (await res.data.income_type) != undefined
        ? (formSimulador2.income_type = await res.data.income_type)
        : (formSimulador2.income_type = "EMPLEO ACTUAL");
      (await res.data.income_salary) != undefined
        ? (formSimulador2.salary = await res.data.income_salary)
        : (formSimulador2.salary = "");
      (await res.data.nationality) != undefined
        ? (formSimulador2.nationality = await res.data.nationality)
        : (formSimulador2.nationality = "CHILENA");
      (await res.data.work_continuity) != undefined
        ? (formSimulador2.work_continuity = await res.data.work_continuity)
        : (formSimulador2.work_continuity = 24);
      (await res.data.phone) != undefined
        ? (formSimulador2.phone = await res.data.phone.slice(3))
        : (formSimulador2.phone = "");
      (await res.data.birth_date) != undefined
        ? (formSimulador2.birth_date = document.querySelector(
            'input[type="date"]'
          ).value =
            await res.data.birth_date.split("/").reverse().join("-"))
        : "";
    } else {
      newUser.value = true;
      formSimulador2.work_continuity = 24;
      formSimulador2.income_type = "EMPLEO ACTUAL";
      formSimulador2.salary = "";
      formSimulador2.name = "";
      formSimulador2.first_surname = "";
      formSimulador2.second_surname = "";
      formSimulador2.email = "";
      formSimulador2.phone = "";
      forceRerender();
    }
  } catch (error) {
    console.log(error);
  }

  if (formSimulador2.salary) {
    if (formSimulador2.salary <= 449999) {
      warningSalary.value = true;
    } else {
      warningSalary.value = false;
    }
  }

  pagoMes.value = cuota[2];

  formSimulador2.term = cuota[0];
  formSimulador2.simulation_id = cuota[1];

  formActive.value = false;
  formActive2.value = true;
};

const volverAnterior = () => {
  activo.value--;
  formSimulador2.salary = "";
  formSimulador2.income_type = "";
  formSimulador2.work_continuity = "";
  formSimulador2.birth_date = "";
  warningFecha.value = false;
  formActive2.value = false;
  formActive.value = true;
};

const handleForm2 = async () => {
  loading.value = true;
  formSimulador2.phone = "+56" + formSimulador2.phone;
  if (newUser.value == true) {
    registerForm.dni = formSimulador.dni;
    registerForm.name = formSimulador2.name;
    registerForm.surnames =
      formSimulador2.first_surname + " " + formSimulador2.second_surname;
    registerForm.email = formSimulador2.email;
    registerForm.phone_1 = formSimulador2.phone;
    try {
      const res_register = await axios.post(REGISTER_URL_TWO, registerForm);

      const res = await axios.post(EVALUACION_URL_2, formSimulador2);

      isSuccess.value = true;

      if (await res_register.data.success) {
        window.open(LOGIN_URL_TOKEN(res_register.data.token_id), "_self");
      }
    } catch (error) {
      console.log(error);
    }
    return;
  }
  try {
    const res = await axios.post(EVALUACION_URL_2, formSimulador2);

    if (res.data.success) loading.value = false;
    isSuccess.value = true;
  } catch (error) {
    console.log("error");
  }
};

//PASO 2

watch(formSimulador, () => {
  valorFinanciar.value =
    formSimulador.vehicle_price - formSimulador.down_payment;

  switch (express.value) {
    case true:
      if (
        formSimulador.down_payment < (formSimulador.vehicle_price * 40) / 100 ||
        formSimulador.vehicle_price - formSimulador.down_payment < 500000
      ) {
        formSimulador.down_payment = (formSimulador.vehicle_price * 40) / 100;
      }
      break;

    default:
      if (
        formSimulador.down_payment < (formSimulador.vehicle_price * 20) / 100 ||
        formSimulador.vehicle_price - formSimulador.down_payment < 1500000
      ) {
        formSimulador.down_payment = (formSimulador.vehicle_price * 20) / 100;
      }
      break;
  }

  complete.value = false;
  if (formEmpty(formSimulador)) {
    errorForm.value = true;
  } else {
    errorForm.value = false;
    if (formSimulador.down_payment > 0 && formSimulador.vehicle_price > 0) {
      const res = formSimulador.vehicle_price - formSimulador.down_payment;
      formSimulador.requested_amount = res.toString();
      errorForm.value = false;

      switch (express.value) {
        case true:
          if (
            formSimulador.vehicle_price - formSimulador.down_payment <
            5000000
          ) {
            warningDownPayment.value = true;
            mensajeValor.value =
              "El monto mínimo a financiar es de $5.000.000.";
            errorForm.value = true;
          } else if (
            formSimulador.down_payment <
            (formSimulador.vehicle_price * 40) / 100
          ) {
            warningDownPayment.value = true;
            errorForm.value = true;
            mensajeValor.value =
              "Pie Inicial debe ser mayor o igual al 40% del valor del vehículo";
          } else {
            mensajeValor.value = "";
            errorForm.value = false;
            warningDownPayment.value = false;
          }
          break;

        case false:
          if (
            formSimulador.vehicle_price - formSimulador.down_payment <
            1500000
          ) {
            warningDownPayment.value = true;
            mensajeValor.value =
              "El monto mínimo a solicitar es de $1.500.000.";
            errorForm.value = true;
          } else if (
            formSimulador.down_payment <
            (formSimulador.vehicle_price * 20) / 100
          ) {
            warningDownPayment.value = true;
            errorForm.value = true;
            mensajeValor.value =
              "Pie Inicial debe ser mayor o igual al 20% del valor del vehículo";
          } else if (formSimulador.down_payment < 1500000) {
            warningDownPayment.value = true;
            mensajeValor.value =
              "El monto mínimo a solicitar es de $1.500.000.";
            errorForm.value = true;
          } else {
            mensajeValor.value = "";
            errorForm.value = false;
            warningDownPayment.value = false;
          }

          break;
      }
    } else {
      errorForm.value = true;
    }
  }

  formSimulador2.dni = formSimulador.dni;
  formSimulador2.vehicle_year = formSimulador.vehicle_year;
  formSimulador2.vehicle_price = formSimulador.vehicle_price;
  formSimulador2.down_payment = formSimulador.down_payment;
  formSimulador2.requested_amount = formSimulador.requested_amount;
  formSimulador2.type = formSimulador.type;
  formSimulador2.vehicle_brand = formSimulador.vehicle_brand;
  formSimulador2.vehicle_model = formSimulador.vehicle_model;
  formSimulador2.vehicle_version = formSimulador.vehicle_version;
});

const checkInput = (e) => {
  if (e.length >= 0) {
    if (formSimulador2.name == "") {
      warningName.value = true;
    } else {
      warningName.value = false;
    }
  }
};

const checkSurname = (e) => {
  if (e.length >= 0) {
    if (formSimulador2.first_surname == "") {
      warningSurname.value = true;
    } else {
      warningSurname.value = false;
    }
  }
};

const checkTelefono = (e) => {
  if (e.length >= 0) {
    if (formSimulador2.phone == "" || formSimulador2.phone.length < 9) {
      warningPhone.value = true;
    } else {
      warningPhone.value = false;
    }
  }
};

const checkEmail = (e) => {
  if (e.length >= 0) {
    if (formSimulador2.email == "" || !validateEmail(e)) {
      warningEmail.value = true;
    } else {
      warningEmail.value = false;
    }
  }
};

const checkSecondSurname = (e) => {
  if (e.length >= 0) {
    if (formSimulador2.second_surname == "") {
      warningSecondSurname.value = true;
    } else {
      warningSecondSurname.value = false;
    }
  }
};

const checkFecha = (e) => {
  let fecha_cumple = new Date(formSimulador2.birth_date);
  let fechaValida = fecha_hoy.getFullYear() - fecha_cumple.getFullYear();
  let mesValido = fecha_hoy.getMonth() - fecha_cumple.getMonth();
  if (
    mesValido < 0 ||
    (mesValido === 0 && fecha_hoy.getDate() < fecha_cumple.getDate())
  ) {
    fechaValida--;
  }

  if (formSimulador2.birth_date.length >= 0) {
    if (formSimulador2.birth_date == "") {
      mensajeFecha.value = "Debe ingresar una fecha valida";
      warningFecha.value = true;
    } else if (fechaValida < 18) {
      mensajeFecha.value = "Debe ser mayor de edad para evaluar";
      warningFecha.value = true;
    } else {
      warningFecha.value = false;
    }
  }
};

const checkRenta = (e) => {
  if (e.length >= 0) {
    if (formSimulador2.salary.length >= 0) {
      if (formSimulador2.salary <= 449999) {
        warningSalary.value = true;
        mensajeSalario.value =
          "Renta liquida debe ser igual o mayor a $450.000";
      } else if (formSimulador2.salary * 0.3 < pagoMes.value) {
        warningSalary.value = true;
        mensajeSalario.value =
          "Cuota mensual no debe superar el 30% de renta líquida";
      } else {
        warningSalary.value = false;
      }
    } else {
      warningSalary.value = false;
    }
  }
};

const onlyNumber = ($event) => {
  const validNumbers = /[0-9]+/;
  if (!validNumbers.test($event.key)) {
    $event.preventDefault();
  }
};

const onlyRut = ($event) => {
  const validRut = /[^kK0-9]/g;
  if (validRut.test($event.key)) {
    $event.preventDefault();
  }
};

// Watch Format Date
watch(formSimulador2, () => {
  let formated = "";

  if (formSimulador2.phone.length > 0) {
    if (formSimulador2.phone.length != 9) {
      warningPhone.value = true;
    } else {
      warningPhone.value = false;
    }
  }

  if (formSimulador2.salary.length > 0 || formSimulador2.salary) {
    if (formSimulador2.salary <= 449999) {
      warningSalary.value = true;
      mensajeSalario.value = "Renta liquida debe ser igual o mayor a $450.000";
    } else if (formSimulador2.salary * 0.3 < pagoMes.value) {
      warningSalary.value = true;
      mensajeSalario.value =
        "Cuota mensual no debe superar el 30% de renta líquida";
    } else {
      warningSalary.value = false;
    }
  }

  if (!validateEmail(formSimulador2.email)) {
    warningMail.value = true;
  } else {
    warningMail.value = false;
  }

  if (
    formEmpty(formSimulador2) ||
    warningPhone.value == true ||
    warningSalary.value == true ||
    warningName.value == true ||
    warningSurname.value == true ||
    warningMail.value == true ||
    warningFecha.value == true ||
    formSimulador2.birth_date == ""
  ) {
    errorForm2.value = true;
  } else {
    errorForm2.value = false;

    if (formSimulador2.birth_date.includes("-")) {
      formSimulador2.birth_date
        .split("-")
        .reduceRight((prev, current) => (formated = prev + "/" + current));
      formSimulador2.birth_date = formated;
    }
  }
});

watch([loading, isSuccess, isError], () => {
  loading.value == true || isSuccess.value == true || isError.value == true
    ? (alerts.value = true)
    : (alerts.value = false);
});

const registerHandle = () => {
  const phoneToRegister = formSimulador2.phone.slice(3);
  router.push({
    name: "Registro",
    params: {
      rut: formSimulador2.dni,
      nombre: formSimulador2.name,
      apellidos:
        formSimulador2.first_surname + " " + formSimulador2.second_surname,
      correo: formSimulador2.email,
      telefono: phoneToRegister,
    },
  });
};

const loginHandle = () => {
  router.push({
    name: "Login",
    params: {
      rut: formSimulador2.dni,
    },
  });
};

const registrarValor = (e) => {
  express.value = e.name.includes("Express");
  claseCredito.value = e.name.includes("Inteligente");

  switch (express.value) {
    case true:
      isOpen.value = true;
      if (
        formSimulador.down_payment < (formSimulador.vehicle_price * 40) / 100 ||
        formSimulador.vehicle_price - formSimulador.down_payment < 500000
      ) {
        formSimulador.down_payment = (formSimulador.vehicle_price * 40) / 100;
      }
      break;

    case false:
      if (
        formSimulador.down_payment < (formSimulador.vehicle_price * 20) / 100 ||
        formSimulador.vehicle_price - formSimulador.down_payment < 1500000
      ) {
        formSimulador.down_payment = (formSimulador.vehicle_price * 20) / 100;
      }
      break;
  }
};

const cerrarModal = () => {
  isOpen.value = false;
};

const validarPaso = () => {
  let steps = document.querySelectorAll(".step");
  let inputs = steps[activo.value].querySelectorAll("input");

  activo.value < 2 ? activo.value++ : "";
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.4s linear;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transition-duration: 0s;
  transform: translateX(20px);
  opacity: 0;
}

.imagen {
  width: 100%;
  max-width: 100%;
  height: 200px;
  border-radius: 40px 40px 0 0;
  object-fit: cover;
  filter: brightness(0.8);
}
.card {
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 40px;
  position: relative;
  top: -4rem;
  justify-self: center;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.imagenBG {
  z-index: 5;
  background-color: blue;
  opacity: 0.4;
}
@media (min-width: 768px) {
  .imagen {
    width: 100%;
    max-width: 100%;
    height: 450px;
    border-radius: 40px;
    object-fit: cover;
    filter: brightness(0.8);
    margin-bottom: 520px;
  }
  .card {
    width: 95%;
    height: auto;
    background-color: white;
    border-radius: 40px;
    position: relative;
    justify-self: center;
    position: absolute;
    top: 14%;
  }
}
</style>
