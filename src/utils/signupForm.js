
import { ref } from 'vue';


export default function() {
    const email = ref('');
    const password = ref('');
    const username = ref('');
    

    const submitSignup = async () => {
      try {
        const databaseURL = import.meta.env.VITE_APP_DATABASE_URL
        const response = await fetch(`${databaseURL}/user/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
            username: username.value,
          }),
        });

        if (!response.ok) {
          throw new Error(`Signup failed with status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Signup response:', data);
        // this.$router.push({ path:'/login'})
      } catch (error) {
        console.error('Error during signup:', error);
      }
    };

    return {
      email,
      password,
      username,
      submitSignup,
    };
  }