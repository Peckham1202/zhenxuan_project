<template>
  <el-row class="login_container">
    <el-col :span="12" :xs="0">
      <h1>我是占位的</h1>
    </el-col>
    <el-col :span="12" :xs="24">
      <!-- 登录的表单 -->
      <el-form class="login_form">
        <h1>Hello</h1>
        <h2>欢迎来到小煌甄选</h2>
        <el-form-item prop="username">
          <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :prefix-icon="Lock"
            type="password"
            v-model="loginForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login_btn"
            type="primary"
            size="default"
            :loading="isLoading"
            @click="login"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import useUserStore from '@/store/modules/user';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';

let $router = useRouter();

let loginForm = reactive({ username: '', password: '' });
let useStore = useUserStore();
let isLoading = ref(false);
//登录按钮回调
async function login() {
  isLoading.value = true;
  try {
    await useStore.userLogin(loginForm);

    $router.push('/');
    ElNotification({
      type: 'success',
      message: '登录成功',
    });
  } catch (error) {
    console.log(error);

    ElNotification({
      type: 'error',
      message: (error as Error).message,
    });
  } finally {
    isLoading.value = false;
  }
}
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
