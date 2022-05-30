<template>
  <div class="bg-white shadow-xl py-6 px-12 rounded-xl w-fit my-0 mx-auto">
    <Heading1 content="Crea tu cuenta" headingType="h3" class="border-b pb-2" />
    <form
      class="grid items-center justify-items-center gap-4 border-b pb-4 mb-6"
      @submit.prevent="handleForm"
    >
      <InputRut1
        :value="data.rut"
        label="Rut"
        id="rut"
        class="input"
        @update:rut="(e) => (registerForm.dni = e)"
      />
      <Input
        :value="data.nombre"
        label="Nombre"
        id="nombre"
        class="input"
        @update:text="(e) => (registerForm.name = e)"
      />
      <Input
        :value="data.apellidos"
        label="Apellidos"
        id="apellido"
        class="input"
        @update:text="(e) => (registerForm.surnames = e)"
      />
      <InputEmail1
        :value="data.correo"
        label="Correo electronico"
        id="email"
        class="input"
        @update:email="(e) => (registerForm.email = e)"
      />
      <Input
        isPhone
        label="Teléfono"
        id="phone"
        class="input"
        :value="data.telefono"
        @update:text="(e) => (registerForm.phone_1 = e)"
      />
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
      <Paragraph
        class="text-red-700 justify-self-center mb-2"
        v-if="errorPassword"
      >
        Las contraseñas no coinciden
      </Paragraph>

      <Button1
        text="Crear Cuenta"
        secondary
        class="justify-self-center w-fit"
        type="submit"
      />
      <Paragraph class="text-red-700 justify-self-center mb-2" v-if="errorForm">
        Ha ocurrido un error, revisa que tus datos sean validos o si ya posees
        una cuenta
      </Paragraph>
      <Paragraph
        class="text-red-700 justify-self-center mb-2"
        v-if="errorForm"
        v-for="error in errorList"
      >
        {{ error[0] }}
      </Paragraph>
    </form>
  </div>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import InputRut1 from "../components/Input-Rut.vue";
import Input from "./Form/Input.vue";
import Button1 from "./Button.vue";
import InputEmail1 from "./Input-Email.vue";
import { reactive, computed, ref, watch } from "vue";
import axios from "axios";
import { REGISTER_URL, LOGIN_URL_TOKEN } from "../assets/helpers/API";
import Paragraph from "./Paragraph.vue";
import { useRoute } from "vue-router";
import { isObjEmpty } from "../assets/helpers/validate";

const route = useRoute();
const data = ref(route.params);
const errorForm = ref(false);
const registerForm = reactive({
  dni: "",
  name: "",
  surnames: "",
  email: "",
  phone_1: "",
  password: "",
  password_confirmation: "",
});

const fillFormFromParams = () => {
  if (!isObjEmpty(data.value)) {
    console.log("Form from params");
    registerForm.dni = data.value.rut;
    registerForm.name = data.value.nombre;
    registerForm.surnames = data.value.apellidos;
    registerForm.email = data.value.correo;
    registerForm.phone_1 = data.value.telefono;
  } else {
    console.log("nada");
  }
};
const errorList = ref([]);

const errorPassword = computed(() =>
  registerForm.password == registerForm.password_confirmation ? false : true
);
const handleForm = async () => {
  await fillFormFromParams();
  errorForm.value = false;
  try {
    const res = await axios.post(REGISTER_URL, registerForm);
    if (await res.data.success) {
      window.open(LOGIN_URL_TOKEN(res.data.token_id), "_self");
    }
  } catch (error) {
    errorForm.value = true;
    console.log("Catch", error);
    console.log(error.res.data.errors);
    errorList.value = error.res.data.errors;
  }
};
</script>

<style scoped>
.grid .input {
  padding-bottom: 0;
}
</style>
