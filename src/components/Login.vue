<template>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" name="email" required />
      <input type="password" v-model="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
    </form>
</template>
  
<script>
  export default {
    data(){
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async login() {
        const email = this.email;
        const password = this.password;
        const databaseURL = import.meta.env.VITE_APP_DATABASE_URL
  
        const response = await fetch(`${databaseURL}/user/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
        
        console.log(response)

        const data = await response.json();

        // console.log(data)
        const username = data.user.username
        const token = data.token;
        
        localStorage.setItem('username', username)
        localStorage.setItem('jwt_token', token);
        const userData = data.user
        localStorage.setItem('userData', JSON.stringify(userData))
        // console.log(token)
        this.$router.push({ path:'/chat', query: {username} })
      },
    },
  };
</script>
  