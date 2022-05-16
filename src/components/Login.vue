<template>
  <div class="bg-white shadow-xl py-6 px-12 rounded-xl w-fit my-0 mx-auto">
    <Heading1 content="Iniciar Sesion" headingType="h3" class="border-b pb-2" />
    <div
      class="grid items-center justify-items-center gap-4 border-b pb-4 mb-6"
    >
      <InputRut1 label="Rut" id="rut" />
      <Input password label="Contraseña" id="password" />
      <Button1 text="Ingresar" secondary class="justify-self-center w-fit" />
      <router-link
        to="/"
        class="text-primary-900 underline font-semibold text-base"
      >
        Olvide mi contraseña
      </router-link>
    </div>
    <div class="grid items-center gap-4">
      <Paragraph> Aun no tienes tu cuenta en Autocred?</Paragraph>
      <router-link to="/registro" class="justify-self-center w-fit">
        <Button1
          text="Crear Cuenta"
          outlineSecondary
          class="justify-self-center w-fit"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import InputRut1 from "../components/Input-Rut.vue";
import Input from "./Form/Input.vue";
import Button1 from "./Button.vue";
import Paragraph from "../components/Paragraph.vue";
</script>

<style lang="scss" scoped></style>
