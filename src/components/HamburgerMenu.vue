<template>
  <div class="hamburger-menu">
    <button @click="toggleMenu" class="hamburger-menu__button">
      <span class="hamburger-menu__button__line"></span>
      <span class="hamburger-menu__button__line"></span>
      <span class="hamburger-menu__button__line"></span>
    </button>
    <nav v-if="showMenu" class="hamburger-menu__content">
      <router-link to="/">Home</router-link>
      <router-link to="/messages">Messages</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
      <router-link to="/logout">Logout</router-link>
      <router-link to="/chat">My Friend</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if (this.$refs.menuContent) {
        this.$refs.menuContent.classList.toggle('active');
      }
    },
  },
};
</script>
  
  <style scoped>
  /* Add styles for hamburger menu button and content here */
  
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  
  .hamburger-menu__button {
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .hamburger-menu__button__line {
    width: 100%;
    height: 3px;
    background-color: black;
    margin-bottom: 5px;
  }
  
  .hamburger-menu__content {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 10px;
    border-radius: 5px;
    top: 100%;
    left: 0;
    width: 100%;
  }
  
  .hamburger-menu__content a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: black;
  }
  </style>
  