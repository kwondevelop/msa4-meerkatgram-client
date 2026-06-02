import { defineStore } from 'pinia';
import myAxios from '../../api/myAxios.js';
import { useMyErrorStore } from '../error/useMyErrorStore.js';
import { ref } from 'vue';

export const useAuthStore = defineStore('authStore', () => {
  
  // 1. State
  const isLoggedIn = ref(false);
  const accessToken = ref('');
  const userInfo = ref(null);

  // 2. Getters

  // 3. Actions
  const clearAuthStore = () => {
    isLoggedIn.value = false;
    accessToken.value = '';
    userInfo.value = null;
  }
  
  const login = async (loginForm) => {
    try {
      const url = '/api/login';
  
      const res = await myAxios.post(url, loginForm);
      const data = res.data.data;

      accessToken.value = data.accessToken;
      userInfo.value = data.user;
      isLoggedIn.value = true;

    } catch(error) {
      if(error.response) {
        if(error.response.data.code === 'E01') {
          alert(error.response.data.data);
          return;
        }
      }

      useMyErrorStore().setErrorInfo(error);
    }
  }

  const reissue = async () => {
    try {
      const url = '/api/reissue-token';
      
      const res = await myAxios.post(url);
      const data = res.data.data;
      accessToken.value = data.accessToken;
      userInfo.value = data.user;
      isLoggedIn.value = true;
    } catch(error) {
      clearAuthStore();
    }
  };

  const logout = async () => {
    try {
      const url = '/api/logout';

      await myAxios.post(url);
    } catch(error) {
      console.error(error);
    } finally {
      clearAuthStore();
    }
  }

  return {
    // state
    isLoggedIn,
    accessToken,
    userInfo,
    
    // getters
    
    // actions
    
    login,
    reissue,
    logout,
  };

});

export default useAuthStore;