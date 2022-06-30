<template>
  <div class="pt-10 pb-20 grid md:px-12">
    <div class="title mb-8">
      <HeadingVue
        content="Esto nos mueve"
        highlight="mueve"
        highlight-img="mueve"
      />
    </div>
    <div class="grid gap-4 md:gap-4 mb-12">
      <div v-for="(item, index) in valores" :key="index" class="card relative">
        <div class="shadow-xl py-4 px-6 bg-white rounded-2xl">
          <HeadingVue :content="item.title" />
          <Paragraph v-html="item.content" />
        </div>
        <img :src="item.src" alt="" class="absolute top-0" />
      </div>
    </div>
    <router-link to="#contacto" class="justify-self-center">
      <Button1 text="Hablemos" secondary />
    </router-link>
  </div>
</template>

<script setup>
import HeadingVue from "../../components/Heading.vue";
import { valores } from "../../assets/helpers/constants";
import Button1 from "../../components/Button.vue";
import Paragraph from "../../components/Paragraph.vue";
</script>

<style scoped>
.card:nth-child(odd) {
  justify-self: start;
  /* margin-left: 9rem; */
}
.card:nth-child(even) {
  justify-self: end;
  /* margin-right: 9rem; */
}
.card:nth-child(odd) img {
  left: 0;
  top: 0;
  align-self: flex-start;
}
.card:nth-child(even) img {
  right: 0;
  top: 0;
  align-self: flex-end;
}

img {
  width: 100px;
  position: inherit;
  margin-bottom: -1rem;
}

.card {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
}

@media (min-width: 768px) {
  .card:nth-child(odd) {
    justify-self: start;
    margin-left: 9rem;
  }
  .card:nth-child(even) {
    justify-self: end;
    margin-right: 9rem;
  }
  .card:nth-child(odd) img {
    left: -8rem;
    top: 3rem;
  }
  .card:nth-child(even) img {
    right: -8rem;
    top: 3rem;
  }

  img {
    width: 9rem;
  }

  .card {
    width: 80%;
  }
}
</style>
