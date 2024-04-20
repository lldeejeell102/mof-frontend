<template>
    <div class="input-container">
      <input type="text" v-model="message" placeholder="Type your message..." />
      <button @click="sendMessage">></button>
    </div>
  </template>
  
  <script>
  export default {
    props: [],
    data() {
      return {
        message: "",
      };
    },
    methods: {
      sendMessage() {
        const messageData = {
          content: this.message,
          timestamp: new Date().toISOString(),
          role: 'user'
        }
        console.log(JSON.stringify(messageData))
        this.$emit('newMessage', messageData)
        this.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .input-container {
    display: flex;
    margin-bottom: 10px;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>  