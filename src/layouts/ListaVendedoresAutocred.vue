<template>
  
    <div  v-for="(boton,index) in options" class="flex flex-row justify-between my-5">
      <div class="w-2/3">
        <Paragraph>{{ boton.name }}</Paragraph>
      </div>
      
       
       <div class="w-2/3 flex justify-end">
        <BotonSwitch
            :key="index"
            :Id ="boton.name"
            nombre="prueba"
            :checked="boton.check"
            @update:checkVendedor="check(boton, $event)"
            class="boton"
        />
       </div>
    </div>
    
</template>

<script setup>
import BotonSwitch from '../components/BotonSwitch.vue';
import Paragraph from '../components/Paragraph.vue'


const Emits = defineEmits(["update:value"])

const props = defineProps({
    options:Array,
})

const check = (optionId, checked)=>{
      optionId.check = checked;   
}

</script>

<style  scoped>

</style>