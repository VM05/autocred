<template>
  <div>
    <a href="https://wa.me/+56946474281/" target="_blank">
      <img src="../assets/img/ws.png" width="50" height="50" />
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
a {
  width: 100%;
  max-width: 60px;
  position: fixed;
  right: 10px;
  bottom: 30px;
  z-index: 10;
  transition: all 0.3s ease;
}

a > img {
  transition: all 0.3s ease;
}
a:hover img {
  transform: scale(1.1);
}
</style>
