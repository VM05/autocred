<template>
  <Container class="xl:mt-8">
    <Simulador class="mt-20" />
    <BannerHome class="mt-2">
      <template #content>
        <Heading
          content="Obtén tu financiamiento en solo 7 minutos."
          headingType="h2"
          class="mb-5"
        />
        <!-- <Heading
          content="¡Que tu experiencia sea un gran viaje!"
          headingType="h4"
          class="mb-5"
        /> -->
        <div>
          <Heading
            content="Te acompañamos en la compra de tu próximo vehículo usado, realizamos el pago inmediato al vendedor y puedes pagar el pie con transferencia, tarjeta de débito o crédito."
            headingType="h4"
            class="mb-3"
          />
        </div>
      </template>
      <template #image>
        <div class="md:grid place-content-center h-full hidden">
          <video
            src="../../assets/video/promo.mp4"
            muted
            loop
            autoplay
            controls
            class="w-full md:w-auto rounded-3xl"
          ></video>
        </div>
      </template>
    </BannerHome>

    <!-- <Contacto /> -->
    <div class="md:hidden mt-8">
      <Heading content="Conoce más sobre Autocred" class="mb-4" />
      <video
        src="../../assets/video/promo.mp4"
        muted
        controls
        autoplay
        class="rounded-3xl mb-8"
      ></video>
    </div>
    <!-- <CardServicio
      v-for="servicio in servicioCards"
      :data="servicio"
      @clickCard="recibe"
      class="mb-4 md:hidden"
    /> -->
  </Container>
</template>

<script setup>
import Container from "../../components/Yapo/Container.vue";
import BannerHome from "../../layouts/BannerHome.vue";
import Heading from "../../components/Heading.vue";
import Simulador from "../../layouts/Simulador.vue";
import Contacto from "../../components/Yapo/Contacto.vue";
import CardServicio from "../../components/Yapo/CardServicio.vue";
import { servicioCards } from "../../assets/helpers/API";
</script>

<style scoped>
.grid {
  grid-template-columns: 1fr;
  gap: 2rem;
}
.imgBanner {
  width: 85%;
}
.gridImg {
  display: grid;
  place-items: center;
}
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 0.4fr 1fr;
  }
}
</style>
