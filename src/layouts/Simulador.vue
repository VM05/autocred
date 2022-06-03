<template>
  <div class="" id="simulador">
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
        <Heading1 content="Evalua tu crédito" white />
        <Heading1 content="En solo 7 minutos " white />
      </div>

      <div class="card shadow-2xl px-6 py-8">
        <Transition>
          <form @submit.prevent="handleForm" v-show="formActive">
            <div class="title border-b pb-4 border-primary-900">
              <Heading1 content="Evaluador de créditos" headingType="h3" />
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
                />
                <div class="md:flex">
                  <SelectMarcas1
                    label="Marca"
                    id="Marca"
                    @update:marca="
                      (e) => (formSimulador.vehicle_brand = e.name)
                    "
                  />
                  <SelectModelo1
                    label="Modelo"
                    id="Modelo"
                    @update:modelo="
                      (e) => (formSimulador.vehicle_model = e.name)
                    "
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
                  <Heading1 content="Valor del vehiculo" headingType="h4" />
                  <SliderRange1
                    @update:slider="(e) => (formSimulador.vehicle_price = e)"
                    valorTotal
                  />
                </div>
                <div class="pie">
                  <Heading1 content="Valor del pie" headingType="h4" />
                  <SliderRange1
                    @update:slider="(e) => (formSimulador.down_payment = e)"
                  />
                </div>
              </div>
              <div
                class="grid place-content-center"
                v-if="!loading && !complete"
              >
                <img src="../assets/img/simulador.svg" alt="" class="w-full" />
              </div>
              <div class="grid place-content-center" v-if="loading">
                <Paragraph class="text-center mb-8">
                  Estamos evaluando su crédito, espere un momento
                </Paragraph>
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
              <Button1 text="Evaluar  crédito" secondary />
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
              <div v-if="isSuccess" class="text-center">
                <Loading medium />
                <Paragraph class="font-bold"
                  >Estamos evaluando tu solicitud
                </Paragraph>
                <Paragraph class="mb-8"
                  >Te invitamos a registrarte o iniciar sesión para conocer el
                  resultado.
                </Paragraph>
                <div class="flex flex-row gap-2 justify-center">
                  <!-- <router-link to="/registro"> -->
                  <Button secondary text="Registro" @click="registerHandle" />
                  <!-- </router-link> -->
                  <router-link to="/login">
                    <Button
                      primary
                      text="Iniciar sesión"
                      @click="loginHandle"
                    ></Button>
                  </router-link>
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
                  content="Evaluación de Crédito | Datos Personales"
                  headingType="h3"
                />
              </div>
              <div
                class="content py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 border-b"
              >
                <div class="col-span-1">
                  <div class="flex">
                    <Input
                      label="Nombre"
                      id="Nombre"
                      placeholder="Nombre"
                      @update:text="(e) => (formSimulador2.name = e)"
                    />
                  </div>
                  <div class="md:flex">
                    <Input
                      label="Apellido Paterno"
                      id="Apellido Paterno"
                      placeholder="Apellido Paterno"
                      @update:text="(e) => (formSimulador2.first_surname = e)"
                    />
                    <Input
                      label="Apellido Materno"
                      id="Apellido Materno"
                      placeholder="Apellido Materno"
                      @update:text="(e) => (formSimulador2.second_surname = e)"
                    />
                  </div>
                  <div class="md:flex">
                    <InputEmail
                      label="Email"
                      id="Email"
                      placeholder="Email"
                      @update:email="(e) => (formSimulador2.email = e)"
                    />
                    <Input
                      label="Teléfono"
                      id="Telefono"
                      isPhone
                      placeholder="Teléfono"
                      @update:text="(e) => (formSimulador2.phone = '+56' + e)"
                    />
                  </div>
                </div>
                <div class="col-span-1 md:px-5 md:border-x">
                  <div class="flex">
                    <Input
                      money
                      label="Renta Liquida"
                      id="Renta Liquida"
                      placeholder="Renta Liquida"
                      @update:text="(e) => (formSimulador2.salary = e)"
                    />
                  </div>
                  <div class="md:flex">
                    <SelectNacionalidad
                      label="Nacionalidad"
                      id="Nacionalidad"
                      @update:nacionalidad="
                        (e) => (formSimulador2.nationality = e)
                      "
                    />
                    <Input
                      label="Fecha Nacimiento"
                      id="Fecha Nacimiento"
                      date
                      @update:text="(e) => (formSimulador2.birth_date = e)"
                    />
                  </div>
                  <div class="md:flex">
                    <SelectEmpleo
                      label="Tipo Ingreso"
                      id="Tipo Ingreso"
                      @update:empleo="(e) => (formSimulador2.income_type = e)"
                    />
                    <SelectAntiguedad
                      label="Antiguedad Laboral"
                      id="antiguedad"
                      @update:antiguedad="
                        (e) => (formSimulador2.work_continuity = e)
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="footer grid justify-center py-4">
                <Button1 text="Ver Resultados" secondary />
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
import { reactive, ref, watch } from "vue";
import { typeCredit } from "../assets/helpers/API";
import axios from "axios";
import { EVALUACION_URL_1, EVALUACION_URL_2 } from "../assets/helpers/API";
import Loading from "../components/Loading.vue";
import Paragraph from "../components/Paragraph.vue";
import InputEmail from "../components/Input-Email.vue";
import SelectNacionalidad from "../components/SelectNacionalidad.vue";
import SelectEmpleo from "../components/SelectEmpleo.vue";
import SelectAntiguedad from "../components/SelectAntiguedad.vue";
import Button from "../components/Button.vue";
import { useRouter } from "vue-router";
import { empleoType, antiguedad } from "../assets/helpers/API";

const router = useRouter();

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
});
const formSimulador2 = reactive({
  dni: "",
  vehicle_year: "",
  vehicle_price: "",
  down_payment: "",
  requested_amount: "",
  salary: 0, //Number
  term: 0, // Number
  work_continuity: antiguedad[0].value,
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
  income_type: empleoType[0].value,
  simulation_id: "",
});

const dataCuotas = ref([]);
const loading = ref(false);
const alerts = ref(false);
const isSuccess = ref(false);
const isError = ref(false);

const complete = ref(false);
const formActive = ref(true);
const formActive2 = ref(false);

//PASO 1
const handleForm = async () => {
  loading.value = true;
  try {
    const res = await axios.post(EVALUACION_URL_1, formSimulador);
    dataCuotas.value = await res.data.data;
    loading.value = false;
    complete.value = true;
  } catch (error) {
    console.log(error);
  }
};

//PASO INTERMEDIO
const handleTransition = (cuota) => {
  formSimulador2.term = cuota[0];
  formSimulador2.simulation_id = cuota[1];
  formActive.value = false;
  formActive2.value = true;
};

const handleForm2 = async () => {
  loading.value = true;
  try {
    const res = await axios.post(EVALUACION_URL_2, formSimulador2);
    if (res.data.success) loading.value = false;
    isSuccess.value = true;
  } catch (error) {
    console.log(error);
  }
};

//PASO 2

watch(formSimulador, () => {
  if (formSimulador.down_payment > 0 && formSimulador.vehicle_price > 0) {
    const res = formSimulador.vehicle_price - formSimulador.down_payment;
    formSimulador.requested_amount = res.toString();
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

// Watch Format Date
watch(formSimulador2, () => {
  let formated = "";

  if (formSimulador2.birth_date.includes("-")) {
    formSimulador2.birth_date
      .split("-")
      .reduceRight((prev, current) => (formated = prev + "/" + current));
    formSimulador2.birth_date = formated;
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
  }
  .card {
    width: 95%;
    height: auto;
    background-color: white;
    border-radius: 40px;
    position: relative;
    top: -15rem;
    justify-self: center;
  }
}
</style>
