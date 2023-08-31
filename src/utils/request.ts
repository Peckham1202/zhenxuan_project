//进行 axios 的二次封装：使用请求与响应拦截器
import axios from 'axios';
import { ElMessage } from 'element-plus';

//利用 axios 对象的 create 方法，创建 axios 实例(可自定义配置)
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // 设置基础路径 /api
  timeout: 5000, //设置超时时间
});

//添加请求和响应拦截器
request.interceptors.request.use((config) => {
  //config配置对象，一般是往 headers 请求头里添加一些公共参数传给服务器
  //返回配置对象
  return config;
});

request.interceptors.response.use(
  (response) => {
    //请求成功的回调
    //简化返回的数据
    return response.data;
  },
  (error) => {
    //请求失败的回调

    let message = ''; //用于存储错误信息

    const status = error.response.status;
    switch (status) {
      case 401: {
        message = 'TOKEN过期';
        break;
      }

      case 403: {
        message = '无权访问';
        break;
      }

      case 404: {
        message = '请求地址错误';
        break;
      }

      case 500: {
        message = '服务器出现问题';
        break;
      }

      default: {
        message = '网络出现问题';
        break;
      }
    }

    ElMessage({
      type: 'error',
      message,
    });

    return Promise.reject(error);
  },
);

export default request;
