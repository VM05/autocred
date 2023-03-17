<template>
  <div class="bg-white shadow-xl py-6 px-12 rounded-xl w-fit my-0 mx-auto">
    <Heading1 content="Iniciar Sesion" headingType="h3" class="border-b pb-2" />
    <Loading v-if="loading" class="my-4" />
    <div v-else="!loading">
      <form
        class="grid items-center justify-items-center gap-4 border-b pb-4 mb-6"
        @submit.prevent="handleLogin"
      >
        <InputRut1
          :value="data.rut"
          label="Rut"
          id="rut"
          @update:rut="(e) => (loginForm.dni = e)"
        />
        <Input
          password
          label="Contraseña"
          id="password"
          @update:text="(e) => (loginForm.password = e)"
        />
        <Paragraph
          v-if="errorForm"
          class="text-red-700 justify-self-center mb-2"
        >
          Rut y/o Contraseña ingresados no son válidos
        </Paragraph>
        <Button1
          text="Ingresar"
          secondary
          class="justify-self-center w-fit"
          type="submit"
        />
        <a
          :href="PASSWORD_RESET"
          class="text-primary-900 underline font-semibold text-base"
        >
          Olvide mi contraseña
        </a>
      </form>
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
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import Heading1 from "../components/Heading.vue";
import InputRut1 from "../components/Input-Rut.vue";
import Input from "./Form/Input.vue";
import Button1 from "./Button.vue";
import Paragraph from "../components/Paragraph.vue";
import axios from "axios";
import { useRoute } from "vue-router";

import {
  LOGIN_URL,
  LOGIN_URL_TOKEN,
  PASSWORD_RESET,
} from "../assets/helpers/API";
import Loading from "./Loading.vue";
import { isObjEmpty } from "../assets/helpers/validate";

const route = useRoute();
const data = ref(route.params);
const loading = ref(false);
const errorForm = ref(false);
const loginForm = reactive({
  dni: "",
  password: "",
  remember_me: "1",
});

const fillFormFromParams = () => {
  if (!isObjEmpty(data.value)) {
    loginForm.dni = data.value.rut;
  }
};

const handleLogin = async () => {
  await fillFormFromParams();
  loading.value = true;
  try {
    const response = await axios.post(LOGIN_URL, loginForm);
    if (await response.data.success) {
      errorForm.value = false;
      window.open(LOGIN_URL_TOKEN(response.data.token_id), "_self");
    } else {
    }
  } catch (error) {
    loading.value = false;
    errorForm.value = true;
  }
};
</script>

<style scoped></style>
