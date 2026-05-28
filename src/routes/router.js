import { createRouter, createWebHistory } from 'vue-router';
import PostIndex from '../pages/posts/PostIndex.vue';
import MyError from '../pages/errors/MyError.vue';
import Login from '../pages/auth/Login.vue';
import Header from '../components/Header.vue';

const routes = [
  {
    path: '/',
    redirect: '/posts',
  },
  // 인증 관련
  {
    path: '/login',
    component: Login,
  },
  // 게시글 관련
  {
    path: '/posts',
    component: PostIndex,
  },
  // // 에러 관련
  // {
  //   path: '/errors',
  //   component: MyError,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;