<template>
    <div class="chat-box">
      <div class="chat-container">
        <Messages/>
        <p v-for="message in conversationHistory" :key="message.timestamp" class="chat-display-container">
          <p v-if="message.role === 'you'" class="chat-display-you">You: {{ message.content }}</p>
          <p v-if="message.role === 'friend'" class="chat-display-friend">Friend: {{ message.content }}</p>
        </p>
      </div>
    </div>
  </template>
  
    
<script>
    import Messages from './Messages.vue'
    export default {
      props: {
      conversationHistory: Array, 
      },
      components: {
        Messages
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