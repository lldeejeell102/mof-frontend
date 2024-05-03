<template>
    <div class="messages-box">
        <h1 class="title">Recent</h1>
        <div v-if="isLoggedIn" class="messages-container">
            <select size="10" v-model="selected" @change="getSelectedMessage(selected)" class="messages-display-container">
                <option v-for="message in messages" :key="message._id" :value="message" class="messages-display"> {{ message.message }}
                </option>
            </select>
            <div class="input-btn-container">
                <input 
                type="text" 
                v-model="selectedMessage"
                placeholder="updated message"
                class="messages-input"
                />
                <div class="icon-btn-container">
                    <CloudArrowUpIcon class="icon-btn cloudicon" @click="updateMessage(selected)"></CloudArrowUpIcon>
                    <TrashIcon class="icon-btn trashicon" @click="deleteMessage(selected)"></TrashIcon>
                </div>
            </div>
        </div>
        <div v-else>
            <p>You're not logged in! Redirecting in... {{ countdown }}</p>
        </div>
    </div>
</template>
  
    
<script>
    import { TrashIcon, CloudArrowUpIcon } from '@heroicons/vue/24/outline'
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

            const selectElement = this.$refs.selectElement
        },
        
        beforeDestroy() {
            clearInterval(this.intervalId)
        },
        components: {
            TrashIcon,
            CloudArrowUpIcon,
        },
        data() {
            return {
                messages: null,
                countdown: 5,
                selected: null,
                updatedMessage: '',
                selectedMessage: '',
            }
        },

        created() {
            this.getAllMessages()
        },
  
        methods: {
            handleNewMessage(messageData) {
            this.messages.push(messageData)
            },

            getSelectedMessage(selected){
                this.selectedMessage = selected.message
                console.log(this.selectedMessage)
            },

            async getAllMessages() {
                const username = localStorage.getItem('username')
                const databaseURL = import.meta.env.VITE_APP_DATABASE_URL
                const token = localStorage.getItem('jwt_token')
                // console.log({token, username, databaseURL})

                const response = await fetch(`${databaseURL}/mof?username=${username}`, {
                    method: 'GET',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` 
                    },
                });

                if(!response.ok){
                    throw new Error ('failed to get messages')
                }
                const data = await response.json();
                this.messages = await data.message.reverse()
            },
//////////////////////////////////////////////////////////////////////////////////////
            async updateMessage(selected) {
                const updateMessage = this.selectedMessage
                const id = selected._id
                const databaseURL = import.meta.env.VITE_APP_DATABASE_URL
                const token = localStorage.getItem('jwt_token')
                // console.log({updateMessage, id, databaseURL, token})


                const response = await fetch(`${databaseURL}/mof/${id}`, {
                    method: 'PUT',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` 
                    },
                    body: JSON.stringify({ updateMessage }),
                });

                if(!response.ok){
                    throw new Error ('failed to get messages')
                }
                console.log('updated message')
                window.location.reload()
            },

//////////////////////////////////////////////////////////////////////////
            async deleteMessage(messages) {
                const id = messages._id
                const databaseURL = import.meta.env.VITE_APP_DATABASE_URL
                const token = localStorage.getItem('jwt_token')

                const response = await fetch(`${databaseURL}/mof/${id}`, {
                    method: 'DELETE',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` 
                    },
                });
                if(!response.ok){
                    throw new Error ('failed to get messages')
                }
                console.log("deleted message")
                window.location.reload()
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