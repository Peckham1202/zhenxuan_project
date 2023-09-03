import { reqLogin, reqUserInfo } from '@/api/user';
import { ILoginFormData, ILoginResponseData } from '@/api/user/type';
import { constantRoute } from '@/router/routes';
import { getToken, setToken } from '@/utils/token';
import { defineStore } from 'pinia';
import { ref } from 'vue';

//创建用户小仓库
const useUserStore = defineStore('User', () => {
  const token = ref(getToken());

  async function userLogin(data: ILoginFormData) {
    const result: ILoginResponseData = await reqLogin(data);

    if (result.code === 200) {
      token.value = result.data.token!;
      setToken(token.value);

      return 'ok';
    } else {
      console.log(result.data);

      return Promise.reject(new Error(result.data.message));
    }
  }

  return { token, userLogin };
});

export default useUserStore;
