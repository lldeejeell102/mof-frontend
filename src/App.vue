<script >
import { RouterLink, RouterView } from 'vue-router'
import HamburgerMenu from './components/HamburgerMenu.vue'

  export default {
    name: "App",
    components: {
      HamburgerMenu
    }
  }
</script>

<template>
  <div class="main-page">
    <HamburgerMenu />
    <RouterView />
  </div>
</template>

<style>
</style>