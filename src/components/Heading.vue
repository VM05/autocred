<template>
  <component
    :is="headingType"
    class="font-semibold text-primary-900"
    :class="{
      'text-primary-900': primary,
      'text-secondary-900': secondary,
      'text-white': white,
    }"
    v-html="contenido"
  >
  </component>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
const contenido = ref("");
const hightlightsImages = reactive({
  copiloto: "url(../src/assets/svg/palabras-destacadas-copiloto.svg)",
  juntos: "url(../src/assets/svg/palabras-destacadas-juntos.svg)",
  servicios: "url(../src/assets/svg/palabras-destacadas-servicios.svg)",
  piloto: "url(../src/assets/svg/palabras-destacadas-piloto.svg)",
  confiaron: "url(../src/assets/svg/palabras-destacadas-confiaron.svg)",
  compradores: "url(../src/assets/svg/palabras-destacadas-compradores.svg)",
  vendedores: "url(../src/assets/svg/palabras-destacadas-vendedores.svg)",
  recorrido: "url(../src/assets/svg/palabras-destacadas-recorrido.svg)",
  experto: "url(../src/assets/svg/palabras-destacadas-experto.svg)",
  expertos: "url(../src/assets/svg/palabras-destacadas-expertos.svg)",
  mueve: "url(../src/assets/svg/palabras-destacadas-mueve.svg)",
  default: "url(../src/assets/svg/palabras-destacadas-copiloto.svg)",
});
const activeImage = () => {
  switch (props.highlightImg) {
    case "copiloto":
      return hightlightsImages.copiloto;
    case "juntos":
      return hightlightsImages.juntos;
    case "servicios":
      return hightlightsImages.servicios;
    case "piloto":
      return hightlightsImages.piloto;
    case "confiaron":
      return hightlightsImages.confiaron;
    case "compradores":
      return hightlightsImages.compradores;
    case "vendedores":
      return hightlightsImages.vendedores;
    case "recorrido":
      return hightlightsImages.recorrido;
    case "experto":
      return hightlightsImages.experto;
    case "expertos":
      return hightlightsImages.expertos;
    case "mueve":
      return hightlightsImages.mueve;
    default:
      return hightlightsImages.default;
  }
};
const props = defineProps({
  headingType: {
    type: String,
    default: "h2", // you can pass anything from 'h1' to 'h6' here
  },
  content: {
    type: String,
  },
  highlight: String,
  highlightImg: String,
  primary: Boolean,
  secondary: Boolean,
  white: Boolean,
});

onMounted(() => {
  if (props.highlight) {
    contenido.value = props.content;

    const renderImage = (type) => {
      contenido.value = props.content.replace(
        props.highlight,
        `<span class='highlight ${type}'>${props.highlight}</span>`
      );
    };

    switch (props.highlightImg) {
      case "copiloto":
        renderImage("copiloto");
        break;
      case "juntos":
        renderImage("juntos");
        break;
      case "servicios":
        renderImage("servicios");
        break;
      case "piloto":
        renderImage("piloto");
        break;
      case "confiaron":
        renderImage("confiaron");
        break;
      case "compradores":
        renderImage("compradores");
        break;
      case "vendedores":
        renderImage("vendedores");
        break;
      case "recorrido":
        renderImage("recorrido");
        break;
      case "experto":
        renderImage("experto");
        break;
      case "expertos":
        renderImage("expertos");
        break;
      case "mueve":
        renderImage("mueve");
        break;
    }
  } else {
    contenido.value = props.content;
  }
});
</script>

<style scoped>
.text-white {
  color: white;
}
h1 {
  font-size: 24px;
}
h2 {
  font-size: 20px;
}
h3 {
  font-size: 18px;
}
h4 {
  font-size: 16px;
}
h5 {
  font-size: large;
}
h6 {
  font-size: medium;
}
.text-white {
  color: white;
}
@media (min-width: 1024px) {
  h1 {
    font-size: 45px;
  }
  h2 {
    font-size: 35px;
  }
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 20px;
  }
  h5 {
    font-size: large;
  }
  h6 {
    font-size: medium;
  }
}
</style>
<style>
.highlight {
  position: relative;
  z-index: 1;
}
.highlight::after {
  position: absolute;
  content: v-bind("activeImage()");
  z-index: -1;
}

.highlight.copiloto::after {
  top: -5%;
  width: 110%;
  left: -5%;
}
.highlight.juntos::after {
  width: 130%;
  top: -5%;
  left: -15%;
}
.highlight.servicios::after {
  width: 100%;
  top: 30%;
  left: 0;
}
.highlight.piloto::after {
  width: 118%;
  top: -20%;
  left: -9%;
}
.highlight.confiaron::after {
  width: 100%;
  top: 40%;
  left: 0;
}
.highlight.compradores::after {
  width: 118%;
  top: -30%;
  left: -4%;
}
.highlight.vendedores::after {
  width: 110%;
  top: -52%;
  left: -4%;
}
.highlight.recorrido::after {
  width: 100%;
  top: 24%;
  left: 0;
}
.highlight.experto::after {
  width: 120%;
  top: 3%;
  left: -6%;
}
.highlight.mueve::after {
  width: 125%;
  top: -20%;
  left: -6%;
}
</style>
