<template>
  <div class="mb-1">
    <Heading1 content="Nuestro recorrido" />
    <div class="grid grid-cols-1 md:grid-cols-2 pattern">
      <img
        src="../../assets/img/nuestro-recorrido.jpg"
        alt=""
        class="image w-full md:w-11/12"
      />
      <div class="content">
        <p class="font-medium text-primary-900 text-lg">
          <span class="text-secondary-900 font-bold">Autocred</span> nació a
          fines de 2019 con el objetivo de acompañar, facilitar y financiar la
          compra o venta de vehículos usados entre personas. Luego de nuestra
          primera etapa, hemos sumado a <b>FORUM</b> como un socio estratégico,
          incorporando servicios y apuntando a las transferencias digitales y
          móviles.
        </p>
        <br />
        <p class="font-medium text-primary-900 text-lg">
          Nuestro foco es <b>entregar una experiencia inolvidable</b> a las
          personas que compran o venden un auto, entregando un servicio
          conveniente, eficiente, cómodo y con un gran respaldo, maximizando los
          beneficios para todos.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Heading1 from "../../components/Heading.vue";
</script>

<style scoped>
.image {
  border-bottom-right-radius: 100px;
}
.content {
  padding: 1rem 0 0 0;
}
.pattern {
  padding: 0 0 4rem 0;
  /* background-image: url("https://thumbs.dreamstime.com/b/light-grey-network-web-texture-seamless-pattern-great-space-inspired-wallpaper-backgrounds-invitations-packaging-design-132890319.jpg"); */
}
@media (min-width: 768px) {
  .content {
    padding: 3rem 3rem 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
