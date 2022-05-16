<template>
  <div class="bg-gray-100 py-12 px-12 mb-12">
    <Heading1 content="Hablemos" class="mb-12" />
    <div class="bg-white rounded-xl card px-6 py-7">
      <Heading content="Formulario" headingType="h3" class="border-b pb-4" />
      <div class="grid grid-cols-2">
        <div class="left pr-8 border-r">
          <Input
            placeholder="Ingresa tu nombre completo"
            label="Nombre"
            id="name"
          />
          <InputEmail
            placeholder="Ingresa tu correo de contacto"
            label="Correo Electronico"
            id="email"
          />
          <Input
            placeholder="Ingresa tu numero"
            label="Telefono"
            id="phone"
            isPhone
          />
        </div>
        <div class="right pl-8">
          <SelectServicios label="Que servicios necesitas?" class="w-full" />
          <SelectGestion
            label="Como quieres que gestionemos tu servicio?"
            class="w-full"
          />

          <TextArea1 label="Como te podemos ayudar?" id="textarea" />
          <div class="flex justify-end">
            <ButtonVue text="Enviar" outlinePrimary />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import Input from "../components/Form/Input.vue";
import InputEmail from "../components/Input-Email.vue";
import SelectServicios from "../components/SelectServicios.vue";
import TextArea1 from "../components/TextArea.vue";

import ButtonVue from "../components/Button.vue";
import SelectGestion from "../components/SelectGestion.vue";
</script>

<style scoped></style>
