<template>
    <header>
        <h1><a href="/">My Only Friend</a></h1>
        <div class="header-end">
            <Toggle class="header-toggle" :mode="mode" @toggle="$emit('toggle')"/>
            <div class="hamburger-nav-container">
                <div class="hamburger-menu">
                    <button @click="toggleMenu" class="hamburger-menu_button" ref="darkMode">
                        <div class="hamburger-menu_buttonline"></div>
                        <div class="hamburger-menu_buttonline"></div>
                        <div class="hamburger-menu_buttonline"></div>
                    </button>
                </div>
                <nav class="nav-dropdown" v-if="showMenu">
                    <router-link to="/login">Login</router-link>
                    <router-link to="/signup">Signup</router-link>
                    <router-link to="/chat">My Friend</router-link>
                    <button class="logout-btn"><router-link to="/logout">Logout</router-link></button>
                    <router-link to="/history">Messages</router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import Toggle from './Toggle.vue'
export default {
    name: "HamburgerMenu",
    data () {
        return {
            showMenu: false,
        }
    },
    props: ['mode'],
    components: {
        Toggle
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            if (this.$refs.menuContent) {
            this.$refs.menuContent.classList.toggle('active');
            }
        },
    }
}
</script>

<style>

</style>
