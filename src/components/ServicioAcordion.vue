<template>
  <span 
    class="bg-white shadow-2xl cardService rounded-3xl py-4 px-4 cursor-pointer"
    @click="handlerCardService()"
  >
    <div
      class="flex flex-col gap-4 md:gap-0 md:grid place-content-center items-center"
    >
      <img
        src="props.data.img"
        alt="props.data.name"
        class="w-24 md:w-full"
        
      />
      <div class="content">
        <Heading1
          content="props.data.name"
          headingType="h4"
          class="font-bold mb-3"
        />
        <div class="h-0 overflow-hidden parrafo">

       
        <Paragraph class="font-medium text-base ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dicta aliquam, architecto voluptates aut possimus obcaecati accusantium quaerat enim, laborum suscipit saepe aspernatur hic laudantium pariatur doloremque ratione excepturi amet.
        </Paragraph>
        <p class="text-secondary-900 block mt-2 text-right italic">Lo quiero</p>
      </div>
      </div>
    </div>
  </span>

  <span 
    class="bg-white shadow-2xl cardService rounded-3xl py-4 px-4 cursor-pointer"
    @click="handlerCardService()"
  >
    <div
      class="flex flex-col gap-4 md:gap-0 md:grid place-content-center items-center"
    >
      <img
        src="props.data.img"
        alt="props.data.name"
        class="w-24 md:w-full"
        
      />
      <div class="content">
        <Heading1
          content="props.data.name"
          headingType="h4"
          class="font-bold mb-3"
        />
        <div class="h-0 overflow-hidden parrafo">

       
        <Paragraph class="font-medium text-base ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dicta aliquam, architecto voluptates aut possimus obcaecati accusantium quaerat enim, laborum suscipit saepe aspernatur hic laudantium pariatur doloremque ratione excepturi amet.
        </Paragraph>
        <p class="text-secondary-900 block mt-2 text-right italic">Lo quiero</p>
      </div>
      </div>
    </div>
  </span>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import Paragraph from "../components/Paragraph.vue";
import { dataServicios } from "../assets/helpers/constants";
import { useContactoStore } from "../stores/contacto";
import router from "../router";
const useContacto = useContactoStore();

const props = defineProps({
  data: Object,
  servicio: String,
});

const handlerCardService = () => {

  const parrafo = document.querySelectorAll('.parrafo')
  parrafo.forEach(p =>{
    p.addEventListener('mousehover',()=>{
      console.log('hola')
    })
  })
  
};
</script>

<style scoped>
.md\:grid {
  grid-template-columns: 100px 1fr;
  gap: 2rem;
}

img{
  width: 100%;
  height: 100%;
  max-height: 96px;
  max-width: 96px;
}
</style>
