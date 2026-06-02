<script setup>
import { reactive } from "vue";
import MyButton from "../../components/button/MyButton.vue";
import MyInput from "../../components/input/MyInput.vue";
import MyStrikeThroughBehindWord from "../../components/decoration/MyStrikeThroughBehindWord.vue";
import { useAuthStore } from "../../store/auth/useAuthStore.js";
import { useRouter } from "vue-router";
import loginValidator from "../../util/validator/domain/auth/loginValidator.js";

const router = useRouter();
const authStore = useAuthStore();

const loginForm = reactive({
  email: "",
  password: "",
  passwordChk: "",
  nickname: "",
  profileImage: null,
});

const handleFileChange = (event) => {
  loginForm.profileImage = event.target.files[0];
};

const handleSubmit = async () => {
  console.log(loginForm);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <MyInput
      :type="'email'"
      :placeholder="'Email'"
      :readonly="false"
      :required="true"
    />

    <MyInput
      :type="'password'"
      :placeholder="'Password'"
      :readonly="false"
      :required="true"
    />

    <MyInput
      :type="'password'"
      :placeholder="'Password Check'"
      :readonly="false"
      :required="true"
    />

    <MyInput
      :type="'text'"
      :placeholder="'Nickname'"
      :readonly="false"
      :required="true"
    />
    <label for="file">파일</label>
    <input
      id="file"
      type="file"
      accept="image/*"
      @change="handleFileChange"
    />

    <MyButton
      :btn-type="'submit'"
      :color="'black'"
      :size="'middle'"
      :content="'Sign Up'"
    />
  </form>
</template>

<style scoped>
form {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>