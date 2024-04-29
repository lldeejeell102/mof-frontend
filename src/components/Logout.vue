<template>
    <div class="spacer"></div>
    <div class="logout-page">
      <div class="logout-container">
          <div><h1 class="logout-text">You are logged out</h1></div>
          <div><button class="redirect-btn"><a href="/">Login Page</a></button></div>
          <div><button class="redirect-btn"><a href="/signup>">SignUp Page</a></button></div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    mounted() {
      this.logout()
    },
    methods: {
      logout() {
        localStorage.removeItem('jwt_token');
      },
    },
  };
  </script>
  