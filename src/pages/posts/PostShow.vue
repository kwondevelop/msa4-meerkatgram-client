<script setup>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import usePostShowStore from "../../store/post/usePostShowStore";

const route = useRoute();
const router = useRouter();
const postShowStore = usePostShowStore();

onBeforeMount(async () => {
  try {
    await postShowStore.getPost(route.params.id);
  } catch (error) {
    const message = error?.response?.data.data ? error?.response?.data.data : "포스트 획득 실패";
    alert(message);
    router.replace('/');
  }
});
</script>

<template>
  <div class="container">
    <div class ="image" :style="{ backgroundImage: `url(${postShowStore.post.image})` }"></div>
    <div class="option-box">
      <div class="delete-icon"></div>
      <div class="like-box">
        <span>1919</span>
        <div class="like-icon"></div>
      </div>
    </div>
    <p>{{ postShowStore.post.content }}</p>
    <textarea name="" id="">{{ postShowStore.post.content }}</textarea>
  </div>
</template>

<style scoped>
.container {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.image {
  padding-top: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.option-box {
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
}

.like-box {
  display: flex;
  gap: 10px;
}

.delete-icon {
  width: 50px;
  height: 50px;
  background-image: url('/icons/trash-can.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.like-icon {
  width: 50px;
  height: 50px;
  background-image: url('/icons/heart-fill.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.content {
  width: 100%;
  height: auto;
  overflow: hidden;
}
</style>