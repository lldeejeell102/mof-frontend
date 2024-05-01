<template>
    <footer>
        <hr>
        <div class="social">
            <a href="#"><img src="../assets/Github-Original.png" alt="github icon" class="icon github"></img></a>
            <a href="#"><img src="../assets/LinkedIn-Original.png" alt="linkedin icon" class="icon linkedin"></img></a>
            <a href="#"><img src="../assets/TikTok-Original.png" alt="tiktok icon" class="icon ion-social-facebook"></img></a>
        </div>
        <div class="social-negative">
            <a href="#"><img src="../assets/Github-Negative.png" alt="github icon" class="icon github"></img></a>
            <a href="#"><img src="../assets/LinkedIn-Negative.png" alt="linkedin icon" class="icon linkedin"></img></a>
            <a href="#"><img src="../assets/TikTok-Negative.png" alt="tiktok icon" class="icon ion-social-facebook"></img></a>
        </div>
        <ul class="list-inline">
            <li class="list-inline-item"><a href="/login">Login</a></li>
            <li class="list-inline-item"><a href="/signup">Signup</a></li>
            <li class="list-inline-item"><a href="/logout">Terms</a></li>
            <li class="list-inline-item"><a href="/logout">Privacy Policy</a></li>
        </ul>
        <p class="copyright">Daniel Ji © 2024</p>
    </footer>
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
