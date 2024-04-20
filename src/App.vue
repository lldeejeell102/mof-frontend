<script >
import { RouterLink, RouterView } from 'vue-router'
import Signup from './components/Signup.vue'
import Logout from './components/Logout.vue'
import Login from './components/Login.vue'
import MyFriend from './components/MyFriend.vue'
  export default {
    name: "App",
    components: {
      Signup,
      Login,
      Logout,
      MyFriend
    }
  }
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/logout">Logout</router-link> |
      <router-link to="/chat">My Friend</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
</style>