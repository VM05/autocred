<template>
  <div class="px-9 bg-white shadow-2xl cardService rounded-3xl flex ">
 
    <div
      class="flex flex-col py-3  md:py-0 gap-4 md:gap-0 md:grid place-content-center items-center"
    >
      <img
        :src="props.data.img"
        :alt="props.data.name"
        class="w-24 md:w-full"
        v-if="!useContacto.mobile"
      />
      <div class="content">
        <div class="flex items-center gap-3 mb-3 md:mb-0 relative">
          <i class="arrow down absolute -right-3 top-4 transition-all" v-if="useContacto.mobile"></i>
          <img
            :src="props.data.img"
            :alt="props.data.name"
            class="w-10 md:w-full"
            v-if="useContacto.mobile"
      />
          <Heading1
            :content="props.data.name"
            headingType="h6"
            class="font-bold md:mb-3 md:w-full"
          />
      </div>
      <div>
        <Paragraph class="font-medium text-sm text-justify" v-html="props.data.content">
        </Paragraph>
        <p class="text-secondary-900 block mt-2 text-right italic">Lo quiero</p>
      </div>
      </div>
    </div>
 
</div>
</template>

<script setup>
import Heading1 from "../components/Heading.vue";
import Paragraph from "../components/Paragraph.vue";
import { useContactoStore } from "../stores/contacto";

const useContacto = useContactoStore();

const props = defineProps({
  data: Object,
  servicio: String,
});

</script>

<style scoped>
.md\:grid {
  grid-template-columns: 100px 1fr;
  gap: 2rem;
}

/* img{
  width: 100%;
  height: 100%;
  max-height: 96px;
  max-width: 96px;
} */


</style>
