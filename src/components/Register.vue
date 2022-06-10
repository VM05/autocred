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
      <Paragraph class="text-red-700 justify-self-center" v-if="warningPhone">
        El teléfono debe contener al menos 9 digitos
      </Paragraph>
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
      <Paragraph
        class="text-red-700 justify-self-center mb-2"
        v-if="warningPassword"
      >
        La contraseña debe contener al menos 6 caracteres
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
      <div v-if="errorList">
        <Paragraph class="text-red-700 justify-self-center mb-2">
          Rut ingresado ya posee un registro. inicia sesión o recupera tu
          contraseña.
        </Paragraph>
        <router-link
          :to="{
            name: 'Login',
            params: { rut: registerForm.dni },
          }"
          class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-900 hover:bg-primary-700 mb-3"
        >
          Ingresar
        </router-link>
        <a
          :href="PASSWORD_RESET"
          class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary-900 hover:bg-secondary-700 cursor-pointer"
        >
          Recuperar Contraseña
        </a>
      </div>
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
import {
  REGISTER_URL,
  LOGIN_URL_TOKEN,
  PASSWORD_RESET,
} from "../assets/helpers/API";
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
const errorList = ref();

const errorPassword = computed(() =>
  registerForm.password == registerForm.password_confirmation ? false : true
);
const warningPassword = ref(false);
const warningPhone = ref(false);

watch(registerForm, () => {
  registerForm.password.length < 6 && registerForm.password.length > 0
    ? (warningPassword.value = true)
    : (warningPassword.value = false);
  if (isObjEmpty(data.value)) {
    registerForm.phone_1.length != 9
      ? (warningPhone.value = true)
      : (warningPhone.value = false);
  }
});

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
    console.log("Catch", error.response);
    console.log(error.response.data.message);
    console.log(error.response.data.errors.dni[0]);
    errorList.value = error.response.data.errors.dni[0];
  }
};
</script>

<style scoped>
.grid .input {
  padding-bottom: 0;
}
</style>
