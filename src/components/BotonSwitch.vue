<template>
    <div>
        <label class="switch">
            <input type="radio" :name="nombre" :checked="checked" @click="(e)=> handleEvent(e)" :id="Id">
            <span class="slider round" 
            :class="{'bg-secondary-900':checked,
            'bg-primary-900':!checked,}"
            ></span>
        </label>

    </div>
</template>

<script setup>
import {defineProps,defineEmits} from 'vue';

const Emits = defineEmits(["update:checkVendedor"])

const props = defineProps({
    checked: {
        type:Boolean,
    },
    Id:{
      type:String,
    },
    nombre:String,
})

const handleEvent = (e)=>{
  console.log(e.target.checked)
  Emits("update:checkVendedor", e.target.checked)
}

</script>

<style  scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 28px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:focus + .slider {
  box-shadow: 0 0 1px;
}
input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateY(-50%) translateX(18px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}

</style>