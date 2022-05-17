<template>
  <div class="mb-24">
    <div class="relative grid">
      <img
        src="https://picsum.photos/seed/picsum/1000/450"
        alt=""
        class="imagen z-0"
      />
      <div class="z-10 absolute top-16 left-16">
        <Heading1 content="Simula tu credito" white />
        <Heading1 content="Con la mejor cuota" white />
      </div>
      <form class="card shadow-2xl px-6 py-8" @submit.prevent="handleForm">
        <div class="title border-b pb-4 border-primary-900">
          <Heading1 content="Evaluación de Crédito" headingType="h3" />
        </div>
        <div class="content py-6 grid grid-cols-3 gap-6 border-b">
          <div class="col-span-1">
            <InputRut1
              placeholder="RUT"
              class="w-full"
              @update:rut="(e) => (formSimulador.dni = e)"
            />
            <div class="flex">
              <SelectMarcas1
                @update:marca="(e) => (formSimulador.vehicle_brand = e.name)"
              />
              <SelectModelo1
                @update:modelo="(e) => (formSimulador.vehicle_model = e.name)"
              />
            </div>
            <div class="flex">
              <Input
                placeholder="Version"
                @update:text="(e) => (formSimulador.vehicle_version = e)"
              />

              <SelectAnios1
                @update:anio="(e) => (formSimulador.vehicle_year = e)"
              />
            </div>
            <SelectTypeCredito1
              @update:type="(e) => (formSimulador.type = e.value)"
            />
          </div>
          <div class="col-span-1 px-5 border-x grid gap-6">
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
                @update:slider="(e) => (formSimulador.requested_amount = e)"
              />
            </div>
          </div>
          <div class="grid place-content-center" v-if="loading">
            <Loading />
          </div>
          <div class="col-span-1 flex flex-col justify-between" v-else>
            <Acordion1 :cuotasSimulacion="dataCuotas" />
            <!-- <Button1 text="Enviar" outlinePrimary /> -->
          </div>
        </div>
        <div class="footer grid justify-center py-4">
          <Button1 text="Evaluar  crédito" secondary />
        </div>
      </form>
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
import { EVALUACION_URL_1 } from "../assets/helpers/API";
import Loading from "../components/Loading.vue";
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
  dni: formSimulador.dni,
  vehicle_year: formSimulador.vehicle_year,
  vehicle_price: formSimulador.vehicle_price,
  down_payment: formSimulador.down_payment,
  requested_amount: formSimulador.requested_amount,
  salary: 0, //Number
  term: 0, // Number
  work_continuity: 0, //Number
  birth_date: "", //String dia/mes/anio
});

const dataCuotas = ref([]);
const loading = ref(false);

const handleForm = async () => {
  loading.value = true;
  try {
    const res = await axios.post(EVALUACION_URL_1, formSimulador);
    dataCuotas.value = await res.data.data;
    console.log(await res.data.data);
    loading.value = false;
  } catch (error) {}
};

watch(formSimulador, () => {
  if (formSimulador.requested_amount > 0 && formSimulador.vehicle_price > 0) {
    const res = formSimulador.vehicle_price - formSimulador.requested_amount;
    formSimulador.down_payment = res.toString();
  }
});
</script>

<style scoped>
.imagen {
  width: 100%;
  max-width: 100%;
  height: 450px;
  background-color: aquamarine;
  border-radius: 40px;
  object-fit: fill;
  filter: brightness(0.8);
}
.card {
  width: 95%;
  height: auto;
  background-color: white;
  border-radius: 40px;
  position: relative;
  top: -10rem;
  justify-self: center;
}
</style>
