<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '../../store/auth/useAuthStore.js';
import MyButton from "../../components/button/MyButton.vue";
import MyInput from '../../components/input/MyInput.vue';
import MyStrikeThroughBehindWord from '../../components/decoration/MyStrikeThroughBehindWord.vue';

const authStore = useAuthStore();

const loginForm = reactive({
  email: '',
  password: '',
});

const handleSubmit = async () => {
  await authStore.login(loginForm);
  router.replace('/posts');
}
</script>

<template>
  <form @submit.prevent="handleSubmit">

    <MyInput
      :type="'email'"
      :placeholder="'Email'"
      :readonly="false"
      :required="true"
      v-model="loginForm.email"
    >
    </MyInput>

    <MyInput
      :type="'password'"
      :placeholder="'Password'"
      :readonly="false"
      :required="true"
      v-model="loginForm.password"
    >
    </MyInput>

    <MyStrikeThroughBehindWord :content="'or'" />

    <MyButton
      :type="'submit'"
      :color="'gray'"
      :size="'middle'"
      :content="'Log In'"
    >
    </MyButton>

  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    gap: 10px;
  }
</style>