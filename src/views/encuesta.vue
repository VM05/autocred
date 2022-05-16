import { router-link } from '../.nuxt/components';
<template>
  <div
    id="container"
    class="grid place-content-center bg-gradient-to-r from-primary-900 to-secondary-900 min-h-screen"
  >
    <div id="ff-compose"></div>
  </div>

  <component
    :is="'script'"
    async
    defer
    :src="'https://formfacade.com/include/117600640385758363887/form/1FAIpQLSfewHTPdXUbussxATteTXvwTuNJDGn6Rhl0F0itasMIVtf-tA/classic.js?div=ff-compose'"
  >
  </component>
</template>
<script>
export default {
  methods: {
    keelItWithFire() {
      document.querySelector("#ff-submit-root").innerHTML = "Lecciones";
      document.getElementById("ff-submit-root").innerHTML = "Hello World!!";
    },
  },
  beforeUnmount() {
    keelItWithFire();
  },
};
</script>
<style>
/* @media (min-width: 2560px) {
  #container {
    height: 100vh;
  }
}
@media (min-width: 1660px) and (min-height: 1080px) {
  #container {
    height: 100vh;
  }
} */
img {
  width: 90%;
}

.ff-form .ff-submit {
  visibility: hidden;
  position: relative;
}

.ff-form .ff-submit::after {
  background-color: #5d33fb;
  content: "Enviar";
  display: block;
  position: absolute;
  top: 2px;
  visibility: visible;
  padding-left: 35px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 6px;
}
.ff-form .ff-submit img {
  visibility: visible;
  position: absolute;
  z-index: 9;
  top: 10px;
  left: 25px;
}

.ff-button-bar img {
  display: none;
}

.ff-partial {
  display: none !important;
}
</style>
