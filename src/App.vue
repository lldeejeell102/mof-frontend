<script >
import { RouterLink, RouterView } from 'vue-router'
// import Signup from './components/Signup.vue'
// import Logout from './components/Logout.vue'
// import Login from './components/Login.vue'
// import MyFriend from './components/MyFriend.vue'
// import Messages from './components/Messages.vue'
import HamburgerMenu from './components/HamburgerMenu.vue'

  export default {
    name: "App",
    components: {
      HamburgerMenu
      // Signup,
      // Login,
      // Logout,
      // MyFriend
    }
  }
</script>

<template>
  <div class="main-page">
    <HamburgerMenu />
    <RouterView />
  </div>
</template>

<style scoped>
</style>