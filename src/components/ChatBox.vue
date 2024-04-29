<template>
    <div class="chat-box">
      <div class="chat-container">
        <p v-for="message in conversationHistory" :key="message.timestamp" class="">
          <p v-if="message.role === 'you'">You: {{ message.content }}</p>
          <p v-if="message.role === 'friend'">Friend: {{ message.content }}</p>
        </p>
      </div>
    </div>
  </template>
  
    
    <script>
    export default {
      props: {
      conversationHistory: Array, 
    },
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
    </style>