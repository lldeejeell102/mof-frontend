<template>
    <div class="spacer"></div>
    <div class="login-container">
      <form @submit.prevent="login" class="form" :checked="(mode === 'dark') ? 'checked' : false">
        
        <div class="form-body">
          <h1 class="login-title">Welcome to MOF</h1>
          <hr></hr>
        
          <div class="input-area">
        
            <div class="form-inp">
              <input type="email" v-model="email" placeholder="Email" name="email" required class="login-email"/>
            </div>
        
            <div class="form-inp">
              <input type="password" v-model="password" placeholder="Password" name="password" required />
            </div>
        
          </div>
          
          <div class="login-btn">
            <button class="submit-btn" type="submit">Login</button>
          </div>
          
          <div class="forgot-pwd">
            <a href="/">Forgot password</a>
          </div>
        </div>
      
      </form>
      <div class="scroll-container">
          <p class="scroll-intro">Chat with your friend. Ask MOF simple questions. Play Truth or Dare. Invite MOF to a party.</p>
      </div>
    </div>
</template>
  
<script>
  export default {
    data(){
      return {
        email: '',
        password: '',
      }
    },
    props: ['mode'],
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

<style>
</style>