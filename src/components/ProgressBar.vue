<template>
    <div class="root">
       <div class="container">
            <ul class="progressbar">
              <li :class="index <= activo?'active':''" v-for="(item,index) in stepsForm" :key="index"><p>{{item.title}}</p></li>
            </ul>
        </div>
    </div>
  </template>
  <script setup>
  import { stepsForm } from '../assets/helpers/constants';
    const props = defineProps({
        length: Number,
        activo:Number,
    })

  
  </script>
  
  <style scoped>
  .container{
    width: 100%;
      position: relative;
      z-index: 1;
      margin-top: 20px;
  }
  .progressbar{
    counter-reset: step;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .progressbar li{

    position: relative;
    text-align: center;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }

  .progressbar li p{
    max-width: 50px;
  }
  

  .progressbar li:before{
    content:counter(step);
    counter-increment: step;
    width: 25px;
    height: 25px;
    border: 2px solid #212559;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 0 auto;
    border-radius: 50%;
    top: 100%;
    background: white;
    color: #212559;
    text-align: center;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  .progressbar li:after{
    content: '';
    position: absolute;
    width:250%;
    height: 3px;
    background: #212559;
    top: 20%;
    left: -200%;
    z-index: -1;
    transition: all 0.3s ease;
  }
  .progressbar li.active:before{
   border-color: #212559;
   background: #212559;
   color: white
  }
  .progressbar li.active:after{
   background: #212559;
  }
  .progressbar li.active  li:after{
   background: #212559;
  }
  .progressbar li.active  li:before{
  border-color: #212559;
  background: #212559;
  color: white
  }
  .progressbar li:first-child:after{
   content: none;
  }
  </style>