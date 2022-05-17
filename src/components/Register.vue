<template>
  <div class="bg-white shadow-xl py-6 px-12 rounded-xl w-fit my-0 mx-auto">
    <Heading1 content="Crea tu cuenta" headingType="h3" class="border-b pb-2" />
    <form
      class="grid items-center justify-items-center gap-4 border-b pb-4 mb-6"
      @submit.prevent="handleForm"
    >
      <InputRut1
        label="Rut"
        id="rut"
        class="input"
        @update:rut="(e) => (registerForm.dni = e)"
      />
      <Input
        label="Nombre"
        id="nombre"
        class="input"
        @update:text="(e) => (registerForm.name = e)"
      />
      <Input
        label="Apellidos"
        id="apellido"
        class="input"
        @update:text="(e) => (registerForm.surnames = e)"
      />
      <InputEmail1
        label="Correo electronico"
        id="email"
        class="input"
        @update:email="(e) => (registerForm.email = e)"
      />
      <Input isPhone label="Telefono" id="phone" class="input" />
      <Input
        password
        label="Contraseña"
        id="password"
        class="input"
        @update:text="(e) => (registerForm.password = e)"
      />
      <Input
        password
        label="Repetir contraseña"
        id="password2"
        class="input"
        @update:text="(e) => (registerForm.password_confirmation = e)"
      />

      <Button1
        text="Crear Cuenta"
        secondary
        class="justify-self-center w-fit"
        type="submit"
      />
    </form>
  </div>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import InputRut1 from "../components/Input-Rut.vue";
import Input from "./Form/Input.vue";
import Button1 from "./Button.vue";
import InputEmail1 from "./Input-Email.vue";
import { reactive } from "vue";
import axios from "axios";
import { REGISTER_URL } from "../assets/helpers/API";

const registerForm = reactive({
  dni: "",
  name: "",
  surnames: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const handleForm = async () => {
  try {
    const res = await axios.post(REGISTER_URL, registerForm);
    console.log(await res);
  } catch (error) {
    console.log("Catch", error);
  }
};
</script>

<style scoped>
.grid .input {
  padding-bottom: 0;
}
</style>
