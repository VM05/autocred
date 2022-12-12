<template>
    <div class="md:px-12 my-10">
        <Heading content="La experiencia con Autocred" heading-type="h2" class="mb-10"/>

       <video
        playsinline
        muted
        loop
        controls
        class="rounded-3xl mx-auto"
        autoplay
        >
      <source src="../assets/video/promo.mp4" type="video/mp4" />
    </video>


    </div>
</template>

<script setup>
import Video from '../components/Video.vue';
import Heading from '../components/Heading.vue';

</script>

<style scoped>
    video{
        height: 100%;
        max-height: 350px;
    }
</style>