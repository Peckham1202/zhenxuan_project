<template>
  <el-row class="login_container">
    <el-col :span="12" :xs="0"></el-col>
    <el-col :span="12" :xs="24">
      <!-- 登录的表单 -->
      <el-form
        class="login_form"
        :model="loginForm"
        :rules="rules"
        ref="loginFormRef"
      >
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
import { ElNotification, FormInstance } from 'element-plus';
import { getTimeInfo } from '@/utils/time';

let $router = useRouter();

let loginForm = reactive({ username: '', password: '' });
let useStore = useUserStore();
let isLoading = ref(false);

const loginFormRef = ref<FormInstance>();

//登录按钮回调
async function login() {
  try {
    await loginFormRef.value?.validate();
  } catch (error) {
    return;
  }

  isLoading.value = true;
  try {
    await useStore.userLogin(loginForm);

    $router.push('/home');
    ElNotification({
      type: 'success',
      title: `Hi ${getTimeInfo()}好`,
      message: '欢迎回来',
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

function validatorUsername(_rule: any, value: string, callback: any) {
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error('账号长度至少5位'));
  }
}

function validatorPassword(_rule: any, value: string, callback: any) {
  if (value.length >= 6) {
    callback();
  } else {
    callback(new Error('密码长度至少6位'));
  }
}

const rules = {
  username: [{ trigger: 'change', validator: validatorUsername }],
  password: [{ trigger: 'change', validator: validatorPassword }],
};
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
