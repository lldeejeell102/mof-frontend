<template>
    <div class="spacer"></div>
    <h1 class="title">MOF</h1>
    <div class="friend-box" v-if="isLoggedIn">
      <ChatBox :conversationHistory="messages"/>
      <InputBox @newMessage="handleNewMessage"/>
    </div>
    <div v-else class="nli-warning">
      <p class="nli">You're not logged in! Redirecting in...  {{ countdown }}</p>
    </div>
    <div class="spacer"></div>
</template>

<script>
import ChatBox from './ChatBox.vue'
import InputBox from './InputBox.vue'

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
  
  data(){
    return {
      messages: [],
      countdown: 5,
    }
  },
  
  methods: {
    handleNewMessage(messageData) {
      this.messages.push(messageData)
      console.log(messageData)
    }
  },
  name: "myfriend",
  components: {
    ChatBox,
    InputBox,
  }
}
</script>

<style>
</style>