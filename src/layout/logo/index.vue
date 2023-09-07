<template>
  <div class="logo">
    <img src="/logo.png" />
    <p>小煌甄选运营平台</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $base-menu-logo-title-fontSize;
    margin: 10px;
  }
}
</style>
