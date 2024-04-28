<template>
    <div class="login-container">
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-body">
          <h1 class="login-title">Sign Up to MOF</h1>
          <hr></hr>
          <div class="input-area">
            <div class="form-inp">
              <input type="email" v-model="email" placeholder="Email" name="email" required class="login-email" />
            </div>
            <div class="form-inp">
              <input type="password" v-model="password" placeholder="Password" name="password" required />
            </div>
            <div class="form-inp">
              <input type="text" v-model="username" placeholder="Username" name="username" />
            </div>
          </div>
          <div class="login-btn">
            <button type="submit" class="submit-btn">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import signupForm from '../utils/signupForm.js';
  
  export default {
    setup() {
      const { email, password, username, submitSignup } = signupForm();
  
      const handleSubmit = () => {
        submitSignup();
      };
  
      return {
        email,
        password,
        username,
        handleSubmit,
      };
    },
  };
  </script>

<style>
</style>