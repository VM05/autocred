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
      <div class="card shadow-2xl px-6 py-8">
        <div class="title border-b pb-4 border-primary-900">
          <Heading1 content="Simulador" headingType="h3" />
        </div>
        <div class="content py-6 grid grid-cols-3 gap-6 border-b">
          <div class="col-span-1">
            <InputRut1 placeholder="RUT" class="w-full" />
            <div class="flex">
              <SelectMarcas1 />
              <SelectModelo1 />
            </div>
            <div class="flex">
              <Input placeholder="Version" />
              <SelectAnios1 />
            </div>
            <SelectTypeCredito1 />
          </div>
          <div class="col-span-1 px-5 border-x grid gap-6">
            <div class="price">
              <Heading1 content="Valor del vehiculo" headingType="h4" />
              <SliderRange1 />
            </div>
            <div class="pie">
              <Heading1 content="Valor del pie" headingType="h4" />
              <SliderRange1 />
            </div>
          </div>
          <div class="col-span-1 flex flex-col justify-between">
            <Acordion1 />
            <Button1 text="Enviar" outlinePrimary />
          </div>
        </div>
        <div class="footer grid justify-center py-4">
          <Button1 text="Contactanos" secondary />
        </div>
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
