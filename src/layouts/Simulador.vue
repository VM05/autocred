<template>
  <div class="md:px-12" id="simulador">
    <div class="relative grid">
      <div class="relative z-0">
        <img
          src="../assets/img/cotizacion.jpg"
          alt=""
          class="imagen z-0 top-0"
        />
        <div class="imagen imagenBG top-0 absolute"></div>
      </div>
      <div class="z-10 absolute top-12 md:top-16 left-4 md:left-16">
        <Heading1 content="Evalúa tu crédito" white />
        <Heading1 content="En solo 7 minutos " white />
      </div>

      <div class="card shadow-2xl px-6 py-8">
        <Transition>
          <form @submit.prevent="handleForm" v-show="formActive">
            <div class="title border-b pb-4 border-primary-900">
              <Heading1
                content="Etapa 1: Consulta plazo y valor cuota"
                headingType="h3"
              />
            </div>
            <div
              class="content py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 border-b"
            >
              <div class="col-span-1">
                <InputRut1
                  label="RUT"
                  id="RUT"
                  placeholder="RUT"
                  class="w-full"
                  @update:rut="(e) => (formSimulador.dni = e)"
                  @keypress="onlyNumber"
                />
                <div class="md:flex">
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
                <div class="md:flex">
                  <Input
                    label="Version"
                    id="Version"
                    placeholder="Version"
                    @update:text="(e) => (formSimulador.vehicle_version = e)"
                  />

                  <SelectAnios1
                    label="Año"
                    id="Año"
                    @update:anio="(e) => (formSimulador.vehicle_year = e)"
                  />
                </div>
                <SelectTypeCredito1
                  label="Tipo Credito"
                  id="Tipo Credito"
                  @update:type="(e) => (formSimulador.type = e.value)"
                />
              </div>
              <div
                class="col-span-1 md:px-5 md:border-x grid gap-6 mb-8 md:mb-0"
              >
                <div class="price">
                  <Heading1 content="Valor del vehículo" headingType="h4" />
                  <SliderRange1
                    @update:slider="(e) => (formSimulador.vehicle_price = e)"
                    valorTotal
                    @keypress="onlyNumber"
                  />
                </div>
                <div class="pie">
                  <Heading1 content="Valor del pie" headingType="h4" />
                  <SliderRange1
                    @update:slider="(e) => (formSimulador.down_payment = e)"
                    @keypress="onlyNumber"
                  />
                  <Paragraph
                    class="text-red-700 justify-self-center text-center grid-flow-row col-end-3 mt-2"
                    v-if="warningDownPayment"
                  >
                    Pie Inicial debe ser mayor o igual al 20% del valor del
                    vehículo
                  </Paragraph>
                </div>
              </div>
              <div
                class="grid place-content-center"
                v-if="!loading && !complete"
              >
                <img src="../assets/img/simulador.svg" alt="" class="w-full" />
              </div>
              <div class="grid place-content-center" v-if="loading">
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
                />
              </div>
            </div>
            <div class="footer grid justify-center py-4">
              <Button1
                text="Consulta tu cuota"
                secondary
                :disabled="errorForm"
                id="boton-consultar-cuota"
              />
            </div>
          </form>
        </Transition>
        <Transition>
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
                  recuperar tu contraseña para conocer tu resultado y continuar
                  con el proceso
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
              <div class="title border-b pb-4 border-primary-900">
                <Heading1
                  content="Etapa 2: Ingresa tus datos personales para evaluar"
                  headingType="h3"
                />
              </div>
              <div
                class="content py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 border-b"
              >
                <div class="col-span-1">
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

                  <div class="md:flex">
                    <div class="relative">
                      <Input
                        label="Apellido Paterno"
                        id="Apellido Paterno"
                        placeholder="Apellido Paterno"
                        :value="formSimulador2.first_surname"
                        @update:text="(e) => (formSimulador2.first_surname = e)"
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
                  <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="relative">
                      <InputEmail
                        label="Email"
                        id="Email"
                        placeholder="Email"
                        @update:email="(e) => (formSimulador2.email = e)"
                        :value="
                          formSimulador2.email ? formSimulador2.email : ''
                        "
                        @textvalue="(e) => checkEmail(e)"
                      />

                      <Paragraph
                        class="absolute w-full -bottom-6 md:-bottom-6 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                        v-if="warningEmail"
                      >
                        Por favor ingresa una direccion de correo valida
                      </Paragraph>
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
                  </div>
                </div>
                <div class="col-span-1 md:px-5 md:border-x">
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
                    />
                    <Paragraph
                      class="absolute w-full -bottom-6 md:-bottom-0 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                      v-if="warningSalary"
                    >
                      Renta liquida debe ser igual o mayor a $450.000
                    </Paragraph>
                  </div>
                  <div></div>
                  <div class="md:flex">
                    <div class="w-full md:w-1/2">
                      <SelectNacionalidad
                        label="Nacionalidad"
                        id="Nacionalidad"
                        @update:nacionalidad="
                          (e) => (formSimulador2.nationality = e)
                        "
                        :valor="formSimulador2.nationality"
                      />
                    </div>
                    <div class="relative w-full md:w-1/2">
                      <Input
                        label="Fecha Nacimiento"
                        id="Fecha Nacimiento"
                        date
                        @update:text="(e) => (formSimulador2.birth_date = e)"
                        @textvalue="checkFecha(e)"
                      />

                      <Paragraph
                        class="absolute w-full -bottom-0 md:-bottom-6 left-1/2 -translate-x-1/2 text-red-700 justify-self-center grid-flow-row text-center"
                        v-if="warningFecha"
                      >
                        Debe ingresar una fecha valida
                      </Paragraph>
                    </div>
                  </div>
                  <div class="md:flex">
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
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import InputRut1 from "../components/Input-Rut.vue";
import SelectMarcas1 from "../components/SelectMarcas.vue";
import Input from "../components/Form/Input.vue";
import Button1 from "../components/Button.vue";
import SliderRange1 from "../components/Slider-Range.vue";
import Acordion1 from "../components/Acordion.vue";
import SelectAnios1 from "../components/SelectAnios.vue";
import SelectTypeCredito1 from "../components/SelectTypeCredito.vue";
import SelectModelo1 from "../components/SelectModelo.vue";
import { reactive, ref, watch, onMounted, onUpdated, computed } from "vue";
import { typeCredit } from "../assets/helpers/API";
import axios from "axios";
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
import { findProp } from "@vue/compiler-core";

const useSimulador = useSimuladorStore();
const useUtms = useContactoStore();
const router = useRouter();
const errorForm = ref(true);
const errorForm2 = ref(true);

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
const warningNacionalidad = ref(false);
const warningMail = ref(false);
const warningEmail = ref(false);
const complete = ref(false);
const formActive = ref(true);
const formActive2 = ref(false);
const warningDownPayment = ref(false);
const newUser = ref(false);
//PASO 1
const handleForm = async () => {
  loading.value = true;
  try {
    const res = await axios.post(EVALUACION_URL_1, formSimulador);
    dataCuotas.value = await res.data.data;
    loading.value = false;
    complete.value = true;
  } catch (error) {
    console.log("error");
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
  formSimulador2.term = cuota[0];
  formSimulador2.simulation_id = cuota[1];

  formActive.value = false;
  formActive2.value = true;
};

const volverAnterior = () => {
  formSimulador2.nationality = "";
  formSimulador2.salary = "";
  formSimulador2.income_type = "";
  formSimulador2.work_continuity = "";
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
      console.log(res);

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
    console.log(res);
    if (res.data.success) loading.value = false;
    isSuccess.value = true;
  } catch (error) {
    console.log("error");
  }
};

//PASO 2

watch(formSimulador, () => {
  if (formEmpty(formSimulador)) {
    errorForm.value = true;
  } else {
    errorForm.value = false;
    if (formSimulador.down_payment > 0 && formSimulador.vehicle_price > 0) {
      const res = formSimulador.vehicle_price - formSimulador.down_payment;
      formSimulador.requested_amount = res.toString();
      errorForm.value = false;

      if (
        formSimulador.down_payment <
        (formSimulador.vehicle_price * 20) / 100
      ) {
        warningDownPayment.value = true;
        errorForm.value = true;
      } else {
        errorForm.value = false;
        warningDownPayment.value = false;
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

const prueba = () => {
  console.log("hola");
};

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
    if (formSimulador2.phone == "") {
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
  if (formSimulador2.birth_date.length >= 0) {
    if (formSimulador2.birth_date == "") {
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
      } else {
        warningSalary.value = false;
      }
    }
  }
};

const onlyNumber = ($event) => {
  let keyCode = $event.keyCode ? $event.keyCode : $event.which;
  if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
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

  if (formSimulador2.salary.length > 0) {
    if (formSimulador2.salary <= 449999) {
      warningSalary.value = true;
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
    warningMail.value == true
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
</script>

<style scoped>
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
    margin-bottom: 550px;
  }
  .card {
    width: 95%;
    height: auto;
    background-color: white;
    border-radius: 40px;
    position: relative;
    justify-self: center;
    position: absolute;
    top: 20%;
  }
}
</style>
