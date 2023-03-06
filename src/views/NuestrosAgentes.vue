<template>
    <Container>
        <BannerHome>
            <template #content>
                <div class="w-3/4 mx-auto md:mx-0">
                    <Heading content="Conoce a nuestros agentes Autocred" headingType="h1" class="mb-5 text-center md:text-left" />
                </div>
                <Heading content="Somos expertos en financiamiento y gestión de trámites en la compra/venta de vehículos usados entre particulares."  headingType="h4" class="text-center md:text-left"/>
                <router-link to="#nuestros-agentes">
                    <Button text="Conócenos" secondary class="mt-10"/>
                </router-link>
            </template>
            <template #image>
                <div class="grid place-content-center">
                <img
                    src="/img/agentes/icono-agentes.webp"
                    alt="lorem"
                    class="w-3/4 mx-auto"
                />
                </div>
            </template>
        </BannerHome>
        <div id="nuestros-agentes">
            <ListaAgentes :data="ejecutivosPresencial" />
        </div>
       
    </Container>
</template>

<script setup>
import Heading from '../components/Heading.vue';
import Container from '../layouts/Container.vue';
import ListaAgentes from '../layouts/ListaAgentes.vue';
import BannerHome from '../layouts/BannerHome.vue';
import { ejecutivosPresencial, ejecutivosOnline, ejecutivosVenta  } from '../assets/helpers/constants';
import Button from '../components/Button.vue'

</script>

<style lang="scss" scoped>

</style>