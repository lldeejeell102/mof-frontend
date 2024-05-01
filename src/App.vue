<script >
import { RouterLink, RouterView } from 'vue-router'
// import HamburgerMenu from './components/HamburgerMenu.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

  export default {
    name: "App",
    data(){
      return {
        mode: 'light'
      }
    },
    components: {
      Header,
      Footer,
    },
    methods: {
      toggle () {
        if (this.mode === 'dark'){
          this.mode = 'light'
        }else {
          this.mode = 'dark'
        }
      }
    }
  }
</script>

<template>
  <div class="main-page" :class="mode">
    <Header :mode="mode" @toggle="toggle" />
    <RouterView :mode="mode" @toggle="toggle" />
    <Footer :mode="mode" @toggle="toggle" />
  </div>
</template>

<style>
</style>