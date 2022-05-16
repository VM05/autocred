<template>
  <div class="mb-1">
    <Heading1 content="Nuestro recorrido" />
    <div class="grid grid-cols-2 pattern">
      <img
        src="https://api.lorem.space/image/car?w=300&h=300"
        alt=""
        class="image"
      />
      <div class="content">
        <p class="font-medium text-primary-900 text-lg">
          <span class="text-secondary-900 font-bold">Autocred</span> ipsum dolor
          sit amet consectetur adipisicing elit. Sed, enim eveniet itaque facere
          harum culpa atque dolorum exercitationem temporibus! Reprehenderit
          vitae magni repudiandae voluptatum! Eaque totam veniam aut autem
          itaque?
        </p>
        <p class="font-medium text-primary-900 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus
          facere nesciunt vero recusandae expedita deleniti, nulla voluptates,
          optio alias veritatis vitae magnam similique totam, nobis eos voluptas
          minima. Exercitationem.
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
  padding: 3rem 3rem 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.pattern {
  padding: 0 0 4rem 0;
  /* background-image: url("https://thumbs.dreamstime.com/b/light-grey-network-web-texture-seamless-pattern-great-space-inspired-wallpaper-backgrounds-invitations-packaging-design-132890319.jpg"); */
}
</style>
