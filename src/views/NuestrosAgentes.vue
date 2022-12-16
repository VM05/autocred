<template>
    <Container>
        <BannerHome>
            <template #content>
                <div class="w-3/4 mx-auto md:mx-0">
                    <Heading content="Conoce a nuestros agentes Autocred" headingType="h1" class="mb-5 text-center md:text-left" />
                </div>
                <Heading content="Somos expertos en financiamiento y gestión de trámites en la compra/venta de vehículos usados entre particulares."  headingType="h4" class="text-center md:text-left"/>
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
        <ListaAgentes :data="ejecutivosPresencial" titulo="Ejecutivos de venta presencial" />
        <ListaAgentes :data="ejecutivosOnline" titulo="Ejecutivos de venta online" />
        <ListaAgentes :data="ejecutivosVenta" titulo="Ejecutivos de venta" />
    </Container>
</template>

<script setup>
import Heading from '../components/Heading.vue';
import Container from '../layouts/Container.vue';
import ListaAgentes from '../layouts/ListaAgentes.vue';
import BannerHome from '../layouts/BannerHome.vue';
import { ejecutivosPresencial, ejecutivosOnline, ejecutivosVenta  } from '../assets/helpers/constants';
import Paragraph from '../components/Paragraph.vue';

</script>

<style lang="scss" scoped>

</style>