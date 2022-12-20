<template>
    <div >
            <div class="flex flex-col items-center gap-4">
                    <img :src="data.imagen" :alt="data.nombre" class="w-3/5">
                    
               
                <Paragraph class="text-xl">
                    {{ data.nombre }}
                </Paragraph>

                <router-link :to="data.link">
                    <Button1
                        text="Más información"
                        outlineSecondary
                        secondary
                        class="w-full"
                    />
                </router-link>
            </div>
    </div>
</template>

<script setup>
import Paragraph from './Paragraph.vue';
import Button1 from './Button.vue';
import { defineProps } from 'vue';

const props = defineProps({
    data: Object
})

</script>

<style lang="scss" scoped>

</style>