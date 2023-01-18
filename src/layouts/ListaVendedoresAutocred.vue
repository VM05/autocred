<template>
    <div  v-for="(boton,index) in options" class="flex flex-row justify-between my-5">
      <div class="w-1/3">
        <Paragraph>{{ boton.name }}</Paragraph>
      </div>
       <div class="w-1/3">
        <Paragraph>{{ boton.telefono.trim() }}</Paragraph>
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
import { defineProps,defineEmits } from 'vue';
import Paragraph from '../components/paragraph.vue'

const Emits = defineEmits(["update:value"])

const props = defineProps({
    options:Array,
    value:{
        type:Array,
        required:true,
    }
})

const check = (optionId, checked)=>{
    props.options.forEach(boton =>{
      boton.check = false;
    })
      optionId.check = checked;
}

</script>

<style  scoped>

</style>