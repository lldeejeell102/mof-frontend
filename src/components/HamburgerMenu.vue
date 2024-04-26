<template>
  <div class="hamburger-menu">
    <button @click="toggleMenu" class="hamburger-menu_button" ref="darkMode">
      <div class="hamburger-menu_buttonline"></div>
      <div class="hamburger-menu_buttonline"></div>
      <div class="hamburger-menu_buttonline"></div>
    </button>
    <div class="darkmode-toggle">
      <label class="switch" @click="toggleTheme">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
      <img src="../assets/darktheme.svg" width="25">
    </div>
    <nav v-if="showMenu" class="hamburger-menu_content" ref="darkMode">
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/messages">Messages</router-link> -->
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
      isDark: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if (this.$refs.menuContent) {
        this.$refs.menuContent.classList.toggle('active');
      }
    },
    toggleTheme() {
      if(this.isDark === false){
        this.isDark = true
      }else{
        this.isDark = false
        document.body.classList.toggle('dark');
        this.$refs.darkMode.classList.toggle('hamburger-menu-dark')
      }
    },
  },
};
</script>
  
  <style scoped>
  
  .darkmode-toggle{
    display:flex;
  }
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    align-items: end;
  }
  
  .hamburger-menu_button {
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .hamburger-menu_buttonline {
    width: 100%;
    height: 3px;
    background-color: black;
    margin-bottom: 5px;
  }
  .hamburger-menu_buttonline-dark{
  color: bisque
  }
  
  .hamburger-menu_content {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 10px;
    border-radius: 5px;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  
  .hamburger-menu_content a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: black;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 3.5rem;
    height: 1.5rem;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 2rem;
  }
  .slider.round:before {
    border-radius: 50%;
  }
  
  .hamburger-menu-dark{
  background-color: var(--darkpurple);
    div{
      color: var(--beige);
      background-color: var(--lightmaroon);
    }
    a{
      color: var(--beige);
    }

  }


  </style>