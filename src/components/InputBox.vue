<template>
    <div class="input-container">
        <input class="input-text" type="text" v-model="message" placeholder="Type your message..." />
        <button class="input-btn" @click="sendMessage">></button>
    </div>
  </template>
  
  <script>
  // console.log(localStorage)

  export default {
    props: [],
    data() {
      return {
        message: "",
      };
    },
    methods: {
      async sendMessage() {
        const username = localStorage.getItem('username')
        const messageData = {
          content: this.message,
          timestamp: new Date().toISOString(),
          username: username
        }
        const message = this.message
        // console.log(message)
        this.$emit('newMessage', messageData)
        this.message = "";

        await this.postMessage(message, username)
        },
        
        async postMessage(message, username) {
          const databaseURL = import.meta.env.VITE_APP_DATABASE_URL
          const token = localStorage.getItem('jwt_token')

          const response = await fetch(`${databaseURL}/mof`, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({ message, username }),
          });

          if(!response.ok){
            console.log('Error sending message:', await response.text())
          }else {
            const responseData = await response.json()

            this.$emit('newMessage', {
              content: message,
              timestamp: new Date().toISOString(),
              username: username,
              role: 'you'
            })

            this.$emit('newMessage', {
              content: responseData.friendResponse,
              timestamp: new Date().toISOString(),
              username: username,
              role: 'friend'
            })
          }
        },
      },
  };
  </script>
  
  <style scoped>

  </style>  