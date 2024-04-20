<template>
    <div class="chat-container">
      <!-- <p>This should be the message</p> -->
      <p v-for="message in conversationHistory" :key="message.timestamp"> <span v-if="message.role === 'user'">You: {{ message.content }} - {{ message.timestamp }}</span>
        <span v-else>System: {{ message.content }} - {{ message.timestamp }}</span>
      </p>
    </div>
  </template>
  
    
    <script>
    export default {
    props: {
      conversationHistory: Array, 
    },
    // data() {
    //   return {
    //     conversationHistory: [],
    //   };
    // },
    watch: {
      newMessage(newMessage) { 
        if (newMessage) {
          console.log('Received new message:', newMessage)
          this.conversationHistory.push(newMessage); 
        }
      },
    },
  };
  
    </script>
    
    <style scoped>
    .chat-container {
      border: 1px solid #ccc;
      padding: 10px;
      overflow-y: auto;
      max-height: 300px;
    }
    
    .chat-container ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .chat-container li {
      margin-bottom: 5px;
    }
    </style>