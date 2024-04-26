import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Logout from '../components/Logout.vue'
import MyFriend from '../components/MyFriend.vue'
// import Messages from '../components/Messages.vue'


// console.log(process.env.VUE_APP_DATABASE_URL)

const routes = [
  { path: '/', name: 'Login-Home', component: Login },
  // { path: '/messages', name: 'messages', component: Messages },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/chat', name: 'MyFriend', component: MyFriend },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
