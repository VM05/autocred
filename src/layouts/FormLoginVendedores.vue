<template>
    <div class="shadow-xl grid place-content-center w-fit mx-auto p-10 rounded-lg">
        <Heading content="Vendedores Autocred" heading-type="h1" />
        <form class="flex justify-center items-center flex-col" @submit.prevent="verificarUsuario">
            <div class="py-6 w-full">
                <Input 
                label="Usuario"
                id="Usuario"
                placeholder="Usuario"
                @update:text="(e) => (formVendedores.usuario = e)"
                class="py-0"
            />
            </div>
            
            <div class="py-6 w-full">
                <Input 
                password
                label="Contraseña"
                id="Contraseña"
                placeholder="Contraseña"
                @update:text="(e) => (formVendedores.password = e)"
                class="py-0"
            />
            </div>
            

            <Button secondary text="Ingresar" class="mt-6" type="submit"/>
        </form>
    </div>
</template>

<script setup>
import Heading from '../components/Heading.vue'
import Input from '../components/Form/Input.vue'
import Button from '../components/Button.vue'
import { useContactoStore } from '../stores/contacto';
import { useRouter } from 'vue-router';
import {reactive, onMounted} from 'vue'

const formVendedores = reactive({
    usuario:'',
    password:'',
})

const contactoStore = useContactoStore()
const router = useRouter()

onMounted(()=>{
    
   let valor = JSON.parse(sessionStorage.getItem('authenticated'))

   if(valor){
    contactoStore.authenticated = valor
   }

   if(contactoStore.authenticated){
    router.push({name:'vendedores-autocred'})
   }

})


const verificarUsuario = ()=>{

    if(formVendedores.usuario === 'johanna' && formVendedores.password === 'zDHn8QqX{#t,`f,H'){
        contactoStore.authenticated = true
        sessionStorage.setItem('authenticated', true)
        router.push({name:'vendedores-autocred'})
    }else{
        console.log('hubo un error');
    }
}


</script>

<style scoped>

</style>