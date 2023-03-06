<template>
    <div> 
        <div>
            <a :href="`https://api.whatsapp.com/send?phone=${telefono}`" class="bg-white shadow-2xl rounded-3xl px-4 cursor-pointer flex md:flex-col  items-center py-4 md:py-10 gap-5 w-full transition hover:scale-105">
                <div>
                    <img :src="props.data.imagen" :alt="props.data.nombre" class="w-24 md:w-full md:h-44 mx-auto rounded-full" v-if="props.data.imagen">
                    <div v-else class="w-20 md:w-44 md:h-44 bg-slate-300 p-10 rounded-full mx-auto"></div>
                </div>
                <div class="md:text-center flex flex-col align-middle">
                    <div class="flex flex-row md:flex-col md:justify-center gap-1 md:gap-0">
                        <p class=" text-secondary-900 font-bold text-lg">{{props.data.nombre}}</p>
                        <p class="text-primary-900 font-bold text-lg">{{props.data.apellido}}</p>
                    </div>
                    <div class=" text-primary-900 font-extralight text-sm flex flex-col justify-between">
                        <p class="mb-2">{{props.data.ubicacion}}</p>
                        <p class="mb-2">{{props.data.telefono}}</p>
                        <p class="mb-2">{{props.data.email}}</p>
                    </div>
                </div>
            </a> 
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    data: Object
})

const telefono = props.data.telefono.replace(/[ +]/g,'')

</script>

<style scoped>
    a{
        margin-bottom: 5px;
    }
</style>