<template>
    <div class="messages-container">
        <h1>Messages</h1>
        <div v-if="isLoggedIn">
            <h1>hi</h1>
            <button @click="fetchedMessages">SEND ITTTT</button>
        </div>
        <div v-else>
            <p>You're not logged in! Redirecting in... {{ countdown }}</p>
        </div>
    </div>
</template>
  
    
<script>
    export default {
        mounted() {
            const token = localStorage.getItem('jwt_token')
            this.isLoggedIn = token ? true : false;
    
            const intervalId = setInterval(() => {
            if (this.countdown > 0) {
                this.countdown--;
            } else {
                clearInterval(intervalId);
                if (!this.isLoggedIn) {
                this.$router.push('/login');
                }
            }
            }, 1000);
            this.$emit('component-destroy');
        },
        
        beforeDestroy() {
            clearInterval(this.intervalId)
        },
        
        data() {
            return {
                messages: [],
                countdown: 5,
            }
        },

        async getAllMessages() {
            const username = localStorage.getItem('username')
            const databaseURL = import.meta.env.VITE_APP_DATABASE_URL
            const token = localStorage.getItem('jwt_token')

            const response = await fetch(`${databaseURL}/mof`, {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({ username }),
            });

            if(!response.ok){
                throw new Error ('failed to get messages')
            }
            const data = await response.json();
            console.log(data)
            return data
        },
  
        methods: {
            handleNewMessage(messageData) {
            this.messages.push(messageData)
            },
        },

        computed: {
            async fetchedMessages() {
                try{
                    const data = await this.getAllMessages()
                    console.log(data)
                    return data
                }catch (error){
                    console.log(error)
                }
            }
        },
    }
</script>
    
<style scoped>
</style>