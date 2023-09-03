import { createApp } from 'vue';
import App from './App.vue';

//引入 element-plus 模块
import ElementPlus from 'element-plus';
//引入 element-plus 提供的样式
import 'element-plus/dist/index.css';

//@ts-expect-error 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

import 'virtual:svg-icons-register';

import globalComponents from '@/components';

//引入全局的样式
import '@/styles/index.scss';

//引入路由
import router from './router';

//引入仓库
import pinia from './store';

//创建实例
const app = createApp(App);

//使用 element-plus 插件
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(globalComponents);
app.use(router);
app.use(pinia);

//挂载应用
app.mount('#app');
